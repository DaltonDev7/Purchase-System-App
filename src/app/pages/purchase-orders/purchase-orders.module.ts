import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPurchaseOrdersComponent } from './list-purchase-orders/list-purchase-orders.component';
import { PurchaseOrdersRoutingModule } from './purchase-orders-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxUpperCaseDirectiveModule } from 'ngx-upper-case-directive';
import { NgxMaskModule } from 'ngx-mask';



@NgModule({
  declarations: [
    ListPurchaseOrdersComponent
  ],
  imports: [
    CommonModule,
    PurchaseOrdersRoutingModule,
    NgxPaginationModule,
    NgxMaskModule.forRoot(),
  ]
})
export class PurchaseOrdersModule { }
