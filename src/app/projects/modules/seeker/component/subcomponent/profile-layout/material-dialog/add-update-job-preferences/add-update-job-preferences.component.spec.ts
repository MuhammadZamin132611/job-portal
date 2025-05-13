import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdateJobPreferencesComponent } from './add-update-job-preferences.component';

describe('AddUpdateJobPreferencesComponent', () => {
  let component: AddUpdateJobPreferencesComponent;
  let fixture: ComponentFixture<AddUpdateJobPreferencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddUpdateJobPreferencesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddUpdateJobPreferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
