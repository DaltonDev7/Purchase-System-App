import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProvidersComponent } from './list-providers/list-providers.component';
import { ProvidersRoutingModule } from './providers-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxMaskModule } from 'ngx-mask';



@NgModule({
  declarations: [
    ListProvidersComponent
  ],
  imports: [
    CommonModule,
    ProvidersRoutingModule,
    NgxPaginationModule,
    NgxMaskModule.forRoot(),
  ]
})
export class ProvidersModule { }
