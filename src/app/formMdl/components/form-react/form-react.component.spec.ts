import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { FormReactComponent } from './form-react.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('FormReactComponent', () => {
  let component: FormReactComponent;
  let fixture: ComponentFixture<FormReactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormReactComponent ],
      imports: [
        FormsModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormReactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should update the value of the input field from view to model', () => {
  //   const input = fixture.nativeElement.querySelector('input.input-control');
  //   const event = createNewEvent('input');
  //   input.value = 'Red';
  //   input.dispatchEvent(event);

  //   expect(component.favoriteColorControl.value).toEqual('Red');
  // });
  it('should update the value of the input field from view to model', () => {
    component.favoriteColorControl.setValue('Blue');
    const input = fixture.nativeElement.querySelector('input.input-control');
    expect(input.value).toEqual('Blue');
  });

  fit ('should update the favorite color on the input field',
  fakeAsync(() => {
    component.favoriteColor = 'Blue';
    fixture.detectChanges();

    tick();
    const input = fixture.nativeElement.querySelector('input.input-template');

    expect(input.value).toBe('Blue');
  }));
});
