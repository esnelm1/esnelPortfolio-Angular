import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PercentageChartsComponent } from './percentage-charts.component';

describe('PercentageChartsComponent', () => {
  let component: PercentageChartsComponent;
  let fixture: ComponentFixture<PercentageChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PercentageChartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PercentageChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
