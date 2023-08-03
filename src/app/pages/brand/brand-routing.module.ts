import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListBrandComponent } from './list-brand/list-brand.component';
import { getBrandResolver } from 'src/app/core/resolvers/get-brand.resolver';

const routes: Routes = [
  {
    path: '',
    component: ListBrandComponent,
    resolve: {
      brands: getBrandResolver
    }
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
