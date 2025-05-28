import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuriterDashboardSubscriptionPlanComponent } from './recuriter-dashboard-subscription-plan.component';

describe('RecuriterDashboardSubscriptionPlanComponent', () => {
  let component: RecuriterDashboardSubscriptionPlanComponent;
  let fixture: ComponentFixture<RecuriterDashboardSubscriptionPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecuriterDashboardSubscriptionPlanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecuriterDashboardSubscriptionPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
