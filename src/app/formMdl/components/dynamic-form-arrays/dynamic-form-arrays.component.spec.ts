import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormArraysComponent } from './dynamic-form-arrays.component';

describe('DynamicFormArraysComponent', () => {
  let component: DynamicFormArraysComponent;
  let fixture: ComponentFixture<DynamicFormArraysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicFormArraysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFormArraysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
