import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PurchaseOrder } from 'src/app/core/models/purchase-order';
import { DialogService } from 'src/app/core/services/dialog.service';
import { GeneralStateService } from 'src/app/core/services/general-state.service';
import { PurchaseOrderService } from 'src/app/core/services/purchase-order.service';
import { UnitMeasurementService } from 'src/app/core/services/unit-measurement.service';

@Component({
  selector: 'app-list-purchase-orders',
  templateUrl: './list-purchase-orders.component.html',
  styleUrls: ['./list-purchase-orders.component.scss']
})
export class ListPurchaseOrdersComponent implements OnInit {

  
  purchaseOrderList: PurchaseOrder[] = []
  public currentPage: number = 1

  constructor(
    private generalStateServices: GeneralStateService,
    private dialogServices: DialogService,
    private toastService: ToastrService,
    private purchaseOrderServices: PurchaseOrderService
  ){}

  ngOnInit(): void {
    this.getData()

    
    this.generalStateServices.getEvent().subscribe({
      next: () => {
        this.getData()
      }
    })
  }

  
  public getData() {
    this.purchaseOrderServices.list().subscribe(data => this.purchaseOrderList = data)    
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
        
        if(data){
          this.purchaseOrderServices.delete(id).subscribe(() => {
            this.toastService.success('Eliminado')
            this.generalStateServices.dispachEvent()
          })
        }
      }
    })
  }

}
