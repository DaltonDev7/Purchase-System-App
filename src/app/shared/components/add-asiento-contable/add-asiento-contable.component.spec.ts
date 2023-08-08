import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAsientoContableComponent } from './add-asiento-contable.component';

describe('AddAsientoContableComponent', () => {
  let component: AddAsientoContableComponent;
  let fixture: ComponentFixture<AddAsientoContableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddAsientoContableComponent]
    });
    fixture = TestBed.createComponent(AddAsientoContableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
