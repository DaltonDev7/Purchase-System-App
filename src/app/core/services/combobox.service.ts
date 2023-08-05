import { Injectable } from '@angular/core';
import { BrandServices } from './brand.service';
import { map } from 'rxjs';
import { Brand } from '../models/brand';
import { UnitMeasurementService } from './unit-measurement.service';
import { UnitMeasurement } from '../models/unit-measurement';

@Injectable({
  providedIn: 'root'
})
export class ComboboxService {

  constructor(
    private brandServices: BrandServices,
    private unitServices: UnitMeasurementService
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
        return{
          id: item.id,
          text: item.description
        }
      })
    }))
  }


}
