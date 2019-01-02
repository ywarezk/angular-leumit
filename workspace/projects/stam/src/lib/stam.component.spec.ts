import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StamComponent } from './stam.component';

describe('StamComponent', () => {
  let component: StamComponent;
  let fixture: ComponentFixture<StamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
