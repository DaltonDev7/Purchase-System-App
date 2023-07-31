import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListDeparmentsComponent } from './list-deparments/list-deparments.component';
import { DeparmentsRoutingModule } from './deparments-routing.module';



@NgModule({
  declarations: [
    ListDeparmentsComponent
  ],
  imports: [
    CommonModule,
    DeparmentsRoutingModule
  ]
})
export class DeparmentsModule { }
