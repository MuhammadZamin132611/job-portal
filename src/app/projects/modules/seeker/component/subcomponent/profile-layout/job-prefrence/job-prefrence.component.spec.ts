import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobPrefrenceComponent } from './job-prefrence.component';

describe('JobPrefrenceComponent', () => {
  let component: JobPrefrenceComponent;
  let fixture: ComponentFixture<JobPrefrenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobPrefrenceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobPrefrenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
