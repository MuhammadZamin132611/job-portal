import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuriterJobActivityDetailsComponent } from './recuriter-job-activity-details.component';

describe('RecuriterJobActivityDetailsComponent', () => {
  let component: RecuriterJobActivityDetailsComponent;
  let fixture: ComponentFixture<RecuriterJobActivityDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecuriterJobActivityDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecuriterJobActivityDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
