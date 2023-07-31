import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListBrandComponent } from './list-brand/list-brand.component';
import { BrandRoutingModule } from './brand-routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListBrandComponent
  ],
  imports: [
    CommonModule,
    BrandRoutingModule,
    ReactiveFormsModule
  ]
})
export class BrandModule { }
