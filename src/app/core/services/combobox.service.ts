import { Injectable } from '@angular/core';
import { BrandServices } from './brand.service';
import { map } from 'rxjs';
import { Brand } from '../models/brand';

@Injectable({
  providedIn: 'root'
})
export class ComboboxService {

  constructor(
    private brandServices: BrandServices
  ) { }


  public getBrandCombox() {
    return this.brandServices.list().pipe(map((brands) => {
      console.log(brands);
      
      let data =  brands.map((item: Brand) => {
        return {
          id: item.id,
          text: item.description
        }
      })

      return data;
    }))
  }

}
