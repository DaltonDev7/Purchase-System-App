import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { getBrandResolver } from './get-brand.resolver';

describe('getBrandResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => getBrandResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
