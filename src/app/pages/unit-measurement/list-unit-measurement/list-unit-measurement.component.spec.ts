import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUnitMeasurementComponent } from './list-unit-measurement.component';

describe('ListUnitMeasurementComponent', () => {
  let component: ListUnitMeasurementComponent;
  let fixture: ComponentFixture<ListUnitMeasurementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListUnitMeasurementComponent]
    });
    fixture = TestBed.createComponent(ListUnitMeasurementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
