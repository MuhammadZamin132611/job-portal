import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdateExperienceComponent } from './add-update-experience.component';

describe('AddUpdateExperienceComponent', () => {
  let component: AddUpdateExperienceComponent;
  let fixture: ComponentFixture<AddUpdateExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddUpdateExperienceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddUpdateExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
