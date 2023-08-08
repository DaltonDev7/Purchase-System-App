import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TypeSearchOrders } from 'src/app/core/enums/type-search-order';
import { Combox } from 'src/app/core/interfaces/combox';
import { PurchaseOrder } from 'src/app/core/models/purchase-order';
import { ComboboxService } from 'src/app/core/services/combobox.service';
import { DialogService } from 'src/app/core/services/dialog.service';
import { GeneralStateService } from 'src/app/core/services/general-state.service';
import { PurchaseOrderService } from 'src/app/core/services/purchase-order.service';
import { UnitMeasurementService } from 'src/app/core/services/unit-measurement.service';


interface PurchaseOrderFilter {
  ArticleId?: number
  SupplierId?: number
  DepartmentId?: number
}

@Component({
  selector: 'app-list-purchase-orders',
  templateUrl: './list-purchase-orders.component.html',
  styleUrls: ['./list-purchase-orders.component.scss']
})
export class ListPurchaseOrdersComponent implements OnInit {

  purchaseOrderList: PurchaseOrder[] = []
  public currentPage: number = 1
  public buscadorForm!: FormGroup;
  public buscadorType: Combox[] = [
    {
      id: 1,
      text: 'ARTICULO'
    },
    {
      id: 2,
      text: 'DEPARTAMENTO'
    },
    {
      id: 3,
      text: 'SUPLIDOR'
    }
  ]

  public purchaseOrderFilter: PurchaseOrderFilter = {

  }

  public dataType: Combox[] = []

  constructor(
    private comboxServices: ComboboxService,
    private fb: FormBuilder,
    private generalStateServices: GeneralStateService,
    private dialogServices: DialogService,
    private toastService: ToastrService,
    private purchaseOrderServices: PurchaseOrderService
  ) { }

  ngOnInit(): void {

    console.log(this.purchaseOrderFilter);


    this.buscadorForm = this.fb.group({
      buscarBy: [null],
      IdData: [{ value: null, disabled: true }]
    })

    this.getData()
    this.generalStateServices.getEvent().subscribe({
      next: () => {
        this.getData()
      }
    })

    this.validateOrders()
    this.filterOrder()
  }


  public getData() {
    this.purchaseOrderServices.list().subscribe((data) => {
      this.purchaseOrderList = data
    })
  }

  private validateOrders() {
    this.buscadorForm.get('buscarBy')?.valueChanges.subscribe({
      next: (tipo: number) => {

        if (tipo !== null) {
          switch (tipo) {
            case TypeSearchOrders.ARTICULO:
              this.comboxServices.getArticlesCombobox().subscribe(data => this.dataType = data)
              break;

            case TypeSearchOrders.DEPARTAMENTO:
              this.comboxServices.getDepartmentsCombox().subscribe(data => this.dataType = data)
              break;

            case TypeSearchOrders.SUPLIDOR:
              this.comboxServices.getSupplierCombobox().subscribe(data => this.dataType = data)
              break;
          }


          this.buscadorForm.get('IdData')?.setValue(null)
          this.buscadorForm.get('IdData')?.enable();
        }

      }
    })
  }

  private filterOrder() {

    this.buscadorForm.get('IdData')?.valueChanges.subscribe({
      next: (tipoValor: number) => {
        this.purchaseOrderFilter = {}
        console.log(tipoValor);

        if (tipoValor !== null) {
          let buscarBy: number = this.buscadorForm.get('buscarBy')?.value
          console.log(buscarBy);
          
          let params;
          switch (buscarBy) {
            case TypeSearchOrders.ARTICULO:
              //   this.purchaseOrderFilter.ArticleId = tipoValor
              console.log('entroo');
              
              params = new HttpParams().set('ArticleId', tipoValor);
              break;

            case TypeSearchOrders.DEPARTAMENTO:
              //this.purchaseOrderFilter.DepartmentId = tipoValor
              params = new HttpParams().set('DepartmentId', tipoValor);
              break;

            case TypeSearchOrders.SUPLIDOR:
              //this.purchaseOrderFilter.SupplierId = tipoValor
              params = new HttpParams().set('SupplierId', tipoValor);
              break;
          }


          console.log(params?.toString());
          
          this.purchaseOrderServices.filter(params).subscribe({
            next: (orders:any) => {
              this.purchaseOrderList = orders
            }
          })
        }else{
          this.getData()
        }

      }
    })
  }

  public open() {
    this.dialogServices.openAddEditPurchaseOrder()
  }

  public update(item: PurchaseOrder) {
    this.dialogServices.openAddEditPurchaseOrder(item)
  }

  public delete(id: number) {
    this.dialogServices.confirmDelete(id).subscribe({
      next: (data) => {
        console.log(data);

        if (data) {
          this.purchaseOrderServices.delete(id).subscribe(() => {
            this.toastService.success('Eliminado')
            this.generalStateServices.dispachEvent()
          })
        }
      }
    })
  }

}
