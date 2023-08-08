import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ContabilidadComponent } from './contabilidad/contabilidad.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch:'prefix'
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'contabilidad',
    component: ContabilidadComponent
  },
  {
    path: 'articles',
    loadChildren: () => import('./articles/articles.module').then(m => m.ArticlesModule)
  },
  {
    path: 'brand',
    loadChildren: () => import('./brand/brand.module').then(m => m.BrandModule)
  },
  {
    path: 'purchase-orders',
    loadChildren: () => import('./purchase-orders/purchase-orders.module').then(m => m.PurchaseOrdersModule)
  },
  {
    path: 'deparments',
    loadChildren: () => import('./deparments/deparments.module').then(m => m.DeparmentsModule)
  },
  {
    path: 'providers',
    loadChildren: () => import('./providers/providers.module').then(m => m.ProvidersModule)
  },
  {
    path: 'unit-measurement',
    loadChildren: () => import('./unit-measurement/unit-measurement.module').then(m => m.UnitMeasurementModule)
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PagesRoutingModule { }
