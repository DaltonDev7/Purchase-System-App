import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDeparmentsComponent } from './list-deparments.component';

describe('ListDeparmentsComponent', () => {
  let component: ListDeparmentsComponent;
  let fixture: ComponentFixture<ListDeparmentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListDeparmentsComponent]
    });
    fixture = TestBed.createComponent(ListDeparmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
