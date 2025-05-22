import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditOtherSkillsComponent } from './add-edit-other-skills.component';

describe('AddEditOtherSkillsComponent', () => {
  let component: AddEditOtherSkillsComponent;
  let fixture: ComponentFixture<AddEditOtherSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEditOtherSkillsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditOtherSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
