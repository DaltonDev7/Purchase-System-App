import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Combox } from 'src/app/core/interfaces/combox';
import { GeneralStateService } from 'src/app/core/services/general-state.service';
import { SupplierService } from 'src/app/core/services/supplier.service';

@Component({
  selector: 'app-add-edit-providers',
  templateUrl: './add-edit-providers.component.html',
  styleUrls: ['./add-edit-providers.component.scss']
})
export class AddEditProvidersComponent implements OnInit {

  public supplierForm!: FormGroup
  public title: string = 'Agregar'
  public isUpdate = false;
  public tipoIdentificacion: Combox[] = [{ id: 1, text: 'CEDULA' }, { id: 2, text: 'RNC' }];


  constructor(
    private supplierServices: SupplierService,
    private fb: FormBuilder,
    private toastService: ToastrService,
    private generalStateService: GeneralStateService,
    public dialogRef: MatDialogRef<AddEditProvidersComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    this.supplierForm = this.fb.group({
      identificationType: [null, [Validators.required]],
      idNumber: [null, [Validators.required]],
      name: [null, [Validators.required, Validators.minLength(3)]]
    })

    if (this.data !== undefined) {
      console.log(this.data);
      this.supplierForm.patchValue(this.data)
      this.title = 'Actualizar'
      this.isUpdate = true;

      this.supplierForm.get('identificationType')?.value

    }

    this.supplierForm.get('identificationType')?.valueChanges.subscribe({
      next: () => {
        this.supplierForm.get('idNumber')?.setValue(null)
      }
    })

  }
  public close(): void {
    this.dialogRef.close();
  }

  public save() {
    this.supplierServices.add(this.supplierForm.value).subscribe({
      next: () => {
        this.toastService.success('Guardado!')
        this.dialogRef.close();
        this.generalStateService.dispachEvent()
      }
    })
  }

  public update() {
    this.supplierServices.edit({
      ...this.data,
      name: this.supplierForm.get('name')?.value,
      idNumber: this.supplierForm.get('idNumber')?.value
    }).subscribe({
      next: () => {
        this.toastService.success('Actualizado!')
        this.dialogRef.close();
        this.generalStateService.dispachEvent()
      }
    })
  }


}
