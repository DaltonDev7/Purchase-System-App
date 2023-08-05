import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEditArticlesComponent } from 'src/app/shared/components/add-edit-articles/add-edit-articles.component';
import { AddEditBrandComponent } from 'src/app/shared/components/add-edit-brand/add-edit-brand.component';
import { AddEditDeparmentsComponent } from 'src/app/shared/components/add-edit-deparments/add-edit-deparments.component';
import { AddEditProvidersComponent } from 'src/app/shared/components/add-edit-providers/add-edit-providers.component';
import { AddEditUnitMeasurementComponent } from 'src/app/shared/components/add-edit-unit-measurement/add-edit-unit-measurement.component';
import { Brand } from '../models/brand';
import { ConfirmDeleteComponent } from 'src/app/shared/components/confirm-delete/confirm-delete.component';
import { UnitMeasurement } from '../models/unit-measurement';
import { Department } from '../models/deparment';
import { Supplier } from '../models/supplier';
import { Article } from '../models/article';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(public dialog: MatDialog) { }

  public openAddEditArticles(item?:Article) {
    this.dialog.open(AddEditArticlesComponent, {
      width: '350px',
      height: 'auto',
      disableClose: true,
      data: item
    })
  }

  public openAddEditDeparments(item?:Department) {
    this.dialog.open(AddEditDeparmentsComponent, {
      width: '350px',
      height: 'auto',
      disableClose: true,
      data: item
    })
  }

  public openAddEditSupplier(item?:Supplier) {
    this.dialog.open(AddEditProvidersComponent, {
      width: '350px',
      height: 'auto',
      disableClose: true,
      data: item
    })
  }

  public openAddEditBrand(item?: Brand) {
    this.dialog.open(AddEditBrandComponent, {
      width: '350px',
      height: 'auto',
      disableClose: true,
      data: item
    })
  }

  public confirmDelete(id?:number){
    let confirmDialog = this.dialog.open(ConfirmDeleteComponent,{
      width: '350px',
      height: 'auto',
      disableClose: true,
      data:id
    })

    return confirmDialog.afterClosed();
  }

  public openAddEditOpenMesurement(item?:UnitMeasurement) {
    this.dialog.open(AddEditUnitMeasurementComponent, {
      width: '350px',
      height: 'auto',
      disableClose: true,
      data: item
    })
  }


}
