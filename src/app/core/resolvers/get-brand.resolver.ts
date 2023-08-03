import { ResolveFn } from '@angular/router';
import { BrandServices } from '../services/brand.service';
import { inject } from '@angular/core';
import { take } from 'rxjs';

export const getBrandResolver: ResolveFn<boolean> = (route, state) => {
  return inject(BrandServices).list().pipe(take(1))
};
