import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotedJobsComponent } from './promoted-jobs.component';

describe('PromotedJobsComponent', () => {
  let component: PromotedJobsComponent;
  let fixture: ComponentFixture<PromotedJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PromotedJobsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromotedJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
