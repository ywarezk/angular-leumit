import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Gran1Component } from './gran1.component';

describe('Gran1Component', () => {
  let component: Gran1Component;
  let fixture: ComponentFixture<Gran1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Gran1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Gran1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
