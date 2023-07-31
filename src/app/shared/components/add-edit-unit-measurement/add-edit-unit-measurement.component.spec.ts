import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditUnitMeasurementComponent } from './add-edit-unit-measurement.component';

describe('AddEditUnitMeasurementComponent', () => {
  let component: AddEditUnitMeasurementComponent;
  let fixture: ComponentFixture<AddEditUnitMeasurementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditUnitMeasurementComponent]
    });
    fixture = TestBed.createComponent(AddEditUnitMeasurementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
