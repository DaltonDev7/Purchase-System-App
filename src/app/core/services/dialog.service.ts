import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEditArticlesComponent } from 'src/app/shared/components/add-edit-articles/add-edit-articles.component';
import { AddEditBrandComponent } from 'src/app/shared/components/add-edit-brand/add-edit-brand.component';
import { AddEditDeparmentsComponent } from 'src/app/shared/components/add-edit-deparments/add-edit-deparments.component';
import { AddEditProvidersComponent } from 'src/app/shared/components/add-edit-providers/add-edit-providers.component';
import { AddEditUnitMeasurementComponent } from 'src/app/shared/components/add-edit-unit-measurement/add-edit-unit-measurement.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(public dialog: MatDialog) { }

  public openAddEditArticles() {
    this.dialog.open(AddEditArticlesComponent, {
      width: '350px',
      height: 'auto',
      disableClose: true,
    })
  }

  public openAddEditDeparments() {
    this.dialog.open(AddEditDeparmentsComponent, {
      width: '350px',
      height: 'auto',
      disableClose: true,
    })
  }

  public openAddEditSupplier() {
    this.dialog.open(AddEditProvidersComponent, {
      width: '350px',
      height: 'auto',
      disableClose: true,
    })
  }

  public openAddEditBrand() {
    this.dialog.open(AddEditBrandComponent, {
      width: '350px',
      height: 'auto',
      disableClose: true,
    })
  }

  public openAddEditOpenMesurement(){
    this.dialog.open(AddEditUnitMeasurementComponent, {
      width: '350px',
      height: 'auto',
      disableClose: true,
    })
  }


}