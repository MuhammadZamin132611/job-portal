import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuriterMainDashboardComponent } from './recuriter-main-dashboard.component';

describe('RecuriterMainDashboardComponent', () => {
  let component: RecuriterMainDashboardComponent;
  let fixture: ComponentFixture<RecuriterMainDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecuriterMainDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecuriterMainDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
