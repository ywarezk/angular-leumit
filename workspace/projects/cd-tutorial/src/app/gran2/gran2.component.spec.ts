import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Gran2Component } from './gran2.component';

describe('Gran2Component', () => {
  let component: Gran2Component;
  let fixture: ComponentFixture<Gran2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Gran2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Gran2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
