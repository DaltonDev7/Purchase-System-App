import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditProvidersComponent } from './add-edit-providers.component';

describe('AddEditProvidersComponent', () => {
  let component: AddEditProvidersComponent;
  let fixture: ComponentFixture<AddEditProvidersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditProvidersComponent]
    });
    fixture = TestBed.createComponent(AddEditProvidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
