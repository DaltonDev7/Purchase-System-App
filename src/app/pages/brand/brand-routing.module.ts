import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListBrandComponent } from './list-brand/list-brand.component';

const routes: Routes = [
  {
    path: '',
    component: ListBrandComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class BrandRoutingModule { }
