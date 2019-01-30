import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorFormControlComponent } from './doctor-form-control.component';

describe('DoctorFormControlComponent', () => {
  let component: DoctorFormControlComponent;
  let fixture: ComponentFixture<DoctorFormControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorFormControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorFormControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
