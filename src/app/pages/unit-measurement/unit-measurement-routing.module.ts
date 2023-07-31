import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListUnitMeasurementComponent } from './list-unit-measurement/list-unit-measurement.component';

const routes : Routes = [
  {
    path: '',
    component: ListUnitMeasurementComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class UnitMeasurementRoutingModule { }
