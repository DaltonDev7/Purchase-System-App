import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditDeparmentsComponent } from './add-edit-deparments.component';

describe('AddEditDeparmentsComponent', () => {
  let component: AddEditDeparmentsComponent;
  let fixture: ComponentFixture<AddEditDeparmentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditDeparmentsComponent]
    });
    fixture = TestBed.createComponent(AddEditDeparmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
