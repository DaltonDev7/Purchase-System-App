import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProvidersComponent } from './list-providers/list-providers.component';
import { ProvidersRoutingModule } from './providers-routing.module';



@NgModule({
  declarations: [
    ListProvidersComponent
  ],
  imports: [
    CommonModule,
    ProvidersRoutingModule
  ]
})
export class ProvidersModule { }
