import { TestBed } from '@angular/core/testing';

import { ComboboxService } from './combobox.service';

describe('ComboboxService', () => {
  let service: ComboboxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComboboxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
