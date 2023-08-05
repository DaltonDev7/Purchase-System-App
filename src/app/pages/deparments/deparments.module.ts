import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListDeparmentsComponent } from './list-deparments/list-deparments.component';
import { DeparmentsRoutingModule } from './deparments-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    ListDeparmentsComponent
  ],
  imports: [
    CommonModule,
    DeparmentsRoutingModule,
    NgxPaginationModule
  ]
})
export class DeparmentsModule { }
