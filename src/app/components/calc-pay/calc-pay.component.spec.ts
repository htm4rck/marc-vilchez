import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcPayComponent } from './calc-pay.component';

describe('CalcPayComponent', () => {
  let component: CalcPayComponent;
  let fixture: ComponentFixture<CalcPayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalcPayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
