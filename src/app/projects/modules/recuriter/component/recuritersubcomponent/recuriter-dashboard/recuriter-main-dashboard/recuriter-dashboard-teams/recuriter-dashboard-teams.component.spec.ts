import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuriterDashboardTeamsComponent } from './recuriter-dashboard-teams.component';

describe('RecuriterDashboardTeamsComponent', () => {
  let component: RecuriterDashboardTeamsComponent;
  let fixture: ComponentFixture<RecuriterDashboardTeamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecuriterDashboardTeamsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecuriterDashboardTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
