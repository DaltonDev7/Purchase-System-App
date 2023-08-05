import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { GeneralStateService } from 'src/app/core/services/general-state.service';
import { UnitMeasurementService } from 'src/app/core/services/unit-measurement.service';
import { AddEditUnitMeasurementComponent } from '../add-edit-unit-measurement/add-edit-unit-measurement.component';
import { PurchaseOrderService } from 'src/app/core/services/purchase-order.service';
import { ComboboxService } from 'src/app/core/services/combobox.service';
import { Department } from 'src/app/core/models/deparment';
import { Article } from 'src/app/core/models/article';
import { Supplier } from 'src/app/core/models/supplier';

@Component({
  selector: 'app-add-edit-purchase-order',
  templateUrl: './add-edit-purchase-order.component.html',
  styleUrls: ['./add-edit-purchase-order.component.scss']
})
export class AddEditPurchaseOrderComponent implements OnInit {

  purchaseOrderform!: FormGroup
  public title: string = 'Agregar orden de compra'
  public isUpdate = false;

  public departmentCombox !: any[]
  public articleCombox !: any[]
  public supplierCombox !: any[]


  constructor(
    private comboBox: ComboboxService,
    private toastService: ToastrService,
    private generalStateService: GeneralStateService,
    public dialogRef: MatDialogRef<AddEditPurchaseOrderComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private purchaseOrdersServices: PurchaseOrderService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {

    this.purchaseOrderform = this.fb.group({
      articleId: [null, [Validators.required]],
      supplierId: [null, [Validators.required]],
      departmentId: [null, [Validators.required]],
      quantity: [null, [Validators.required]],
      unitCost: [null, [Validators.required]],
      total: [{ value: null, disabled: true}],
    })

    this.calculateTotal()

    if (this.data !== undefined) {
      console.log(this.data);
      this.purchaseOrderform.patchValue(this.data)
      this.purchaseOrderform.patchValue({total:this.data.total })
      this.title = 'Actualizar orden de compra'
      this.isUpdate = true;
    }

    this.comboBox.getPurchaseOrdersCombobox().subscribe({
      next: ([department, article, supplier]: [Department[], Article[], Supplier[]]) => {
        this.departmentCombox = department;
        this.articleCombox = article
        this.supplierCombox = supplier
      }
    })

   

  }

  private calculateTotal() {
    this.purchaseOrderform.get('quantity')?.valueChanges.subscribe((cantidad: number) => {
      let unitCost = this.purchaseOrderform.get('unitCost')?.value
      this.purchaseOrderform.get('total')?.setValue(unitCost * cantidad)
    })

    this.purchaseOrderform.get('unitCost')?.valueChanges.subscribe((unitCost) => {
      let quantity = this.purchaseOrderform.get('quantity')?.value
      this.purchaseOrderform.get('total')?.setValue(quantity * unitCost)
    })

    console.log(this.purchaseOrderform.controls);
    

  }

  public close(): void {
    this.dialogRef.close();
  }

  public save() {

    this.purchaseOrdersServices.add(this.purchaseOrderform.getRawValue()).subscribe({
      next: () => {
        this.toastService.success('Guardado!')
        this.dialogRef.close();
        this.generalStateService.dispachEvent()
      }
    })
  }
  public update() {
    this.purchaseOrdersServices.edit({
      ...this.data,
      ...this.purchaseOrderform.getRawValue()
    }).subscribe({
      next: () => {
        this.toastService.success('Actualizado!')
        this.dialogRef.close();
        this.generalStateService.dispachEvent()
      }
    })
  }

}
