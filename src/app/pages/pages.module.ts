import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';
import { PagesRoutingModule } from './pages-routing.module';
import { ContabilidadComponent } from './contabilidad/contabilidad.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgSelectModule } from '@ng-select/ng-select';



@NgModule({
  declarations: [
    WelcomeComponent,
    ContabilidadComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    NgSelectModule,
    NgxPaginationModule
  ]
})
export class PagesModule { }
