import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditArticlesComponent } from './add-edit-articles.component';

describe('AddEditArticlesComponent', () => {
  let component: AddEditArticlesComponent;
  let fixture: ComponentFixture<AddEditArticlesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditArticlesComponent]
    });
    fixture = TestBed.createComponent(AddEditArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
