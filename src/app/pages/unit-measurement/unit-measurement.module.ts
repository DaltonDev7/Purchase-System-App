import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUnitMeasurementComponent } from './list-unit-measurement/list-unit-measurement.component';
import { UnitMeasurementRoutingModule } from './unit-measurement-routing.module';



@NgModule({
  declarations: [
    ListUnitMeasurementComponent
  ],
  imports: [
    CommonModule,
    UnitMeasurementRoutingModule
  ]
})
export class UnitMeasurementModule { }
