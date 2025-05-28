import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuriterDashboardMonthlySummaryComponent } from './recuriter-dashboard-monthly-summary.component';

describe('RecuriterDashboardMonthlySummaryComponent', () => {
  let component: RecuriterDashboardMonthlySummaryComponent;
  let fixture: ComponentFixture<RecuriterDashboardMonthlySummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecuriterDashboardMonthlySummaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecuriterDashboardMonthlySummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
