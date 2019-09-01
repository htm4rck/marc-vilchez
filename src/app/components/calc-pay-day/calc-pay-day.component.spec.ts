import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcPayDayComponent } from './calc-pay-day.component';

describe('CalcPayDayComponent', () => {
  let component: CalcPayDayComponent;
  let fixture: ComponentFixture<CalcPayDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalcPayDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcPayDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
