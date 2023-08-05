import { Injectable } from '@angular/core';
import { BrandServices } from './brand.service';
import { forkJoin, map } from 'rxjs';
import { Brand } from '../models/brand';
import { UnitMeasurementService } from './unit-measurement.service';
import { UnitMeasurement } from '../models/unit-measurement';
import { DepartmentService } from './department.service';
import { SupplierService } from './supplier.service';
import { ArticleService } from './article.service';
import { Department } from '../models/deparment';
import { Article } from '../models/article';
import { Supplier } from '../models/supplier';

@Injectable({
  providedIn: 'root'
})
export class ComboboxService {

  constructor(
    private brandServices: BrandServices,
    private unitServices: UnitMeasurementService,
    private departmentServices: DepartmentService,
    private supplierServices: SupplierService,
    private articleServices: ArticleService
  ) { }


  public getBrandCombox() {
    return this.brandServices.list().pipe(map((brands) => {
      console.log(brands);

      let data = brands.map((item: Brand) => {
        return {
          id: item.id,
          text: item.description
        }
      })

      return data;
    }))
  }

  public getUnitMeasurementCombox() {
    return this.unitServices.list().pipe(map((units) => {
      return units.map((item: UnitMeasurement) => {
        return {
          id: item.id,
          text: item.description
        }
      })
    }))
  }

  public getDepartmentsCombox() {
    return this.departmentServices.list().pipe(map((departments) => {
      return departments.map((item: Department) => {
        return {
          id: item.id,
          text: item.name
        }
      })
    }))
  }

  public getArticlesCombobox() {
    return this.articleServices.list().pipe(map((articles) => {
      return articles.map((item: Article) => {
        return {
          id: item.id,
          text: item.description
        }
      })
    }))
  }

  public getSupplierCombobox() {
    return this.supplierServices.list().pipe(map((supplier) => {
      return supplier.map((item: Supplier) => {
        return {
          id: item.id,
          text: item.name
        }
      })
    }))
  }

  public getPurchaseOrdersCombobox(){
    return forkJoin([this.getDepartmentsCombox(), this.getArticlesCombobox(), this.getSupplierCombobox()])
  }


}
