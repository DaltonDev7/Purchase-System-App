import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditArticlesComponent } from './add-edit-articles/add-edit-articles.component';
import { AddEditDeparmentsComponent } from './add-edit-deparments/add-edit-deparments.component';
import { AddEditProvidersComponent } from './add-edit-providers/add-edit-providers.component';
import { AddEditPurchaseOrdersComponent } from './add-edit-purchase-orders/add-edit-purchase-orders.component';
import { AddEditUnitMeasurementComponent } from './add-edit-unit-measurement/add-edit-unit-measurement.component';
import { MatDialogModule } from '@angular/material/dialog';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxMaskModule } from 'ngx-mask';
import { AddEditBrandComponent } from './add-edit-brand/add-edit-brand.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmDeleteComponent } from './confirm-delete/confirm-delete.component';
import { NgxUpperCaseDirectiveModule } from 'ngx-upper-case-directive';



@NgModule({
  declarations: [
    AddEditArticlesComponent,
    AddEditDeparmentsComponent,
    AddEditProvidersComponent,
    AddEditPurchaseOrdersComponent,
    AddEditUnitMeasurementComponent,
    AddEditBrandComponent,
    ConfirmDeleteComponent
  ],
  imports: [
    CommonModule,
    NgSelectModule,
    NgxMaskModule.forRoot(),
    FormsModule,
    NgxUpperCaseDirectiveModule,
    ReactiveFormsModule
  ]
})
export class ComponentsModule { }
