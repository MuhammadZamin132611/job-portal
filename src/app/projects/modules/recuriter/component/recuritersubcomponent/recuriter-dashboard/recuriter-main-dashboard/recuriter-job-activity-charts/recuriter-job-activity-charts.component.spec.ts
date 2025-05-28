import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuriterJobActivityChartsComponent } from './recuriter-job-activity-charts.component';

describe('RecuriterJobActivityChartsComponent', () => {
  let component: RecuriterJobActivityChartsComponent;
  let fixture: ComponentFixture<RecuriterJobActivityChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecuriterJobActivityChartsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecuriterJobActivityChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
