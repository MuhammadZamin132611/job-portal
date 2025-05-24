import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuriterDashboardComponent } from './recuriter-dashboard.component';

describe('RecuriterDashboardComponent', () => {
  let component: RecuriterDashboardComponent;
  let fixture: ComponentFixture<RecuriterDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecuriterDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecuriterDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
