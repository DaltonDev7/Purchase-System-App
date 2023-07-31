import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPurchaseOrdersComponent } from './list-purchase-orders/list-purchase-orders.component';
import { PurchaseOrdersRoutingModule } from './purchase-orders-routing.module';



@NgModule({
  declarations: [
    ListPurchaseOrdersComponent
  ],
  imports: [
    CommonModule,
    PurchaseOrdersRoutingModule
  ]
})
export class PurchaseOrdersModule { }
