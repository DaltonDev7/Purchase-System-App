import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListPurchaseOrdersComponent } from './list-purchase-orders/list-purchase-orders.component';

const routes : Routes = [
  {
    path: '',
    component: ListPurchaseOrdersComponent
  }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class PurchaseOrdersRoutingModule { }
