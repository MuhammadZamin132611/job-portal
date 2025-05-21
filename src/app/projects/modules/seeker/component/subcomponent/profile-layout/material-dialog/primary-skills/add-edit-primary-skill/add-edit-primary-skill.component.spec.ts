import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditPrimarySkillComponent } from './add-edit-primary-skill.component';

describe('AddEditPrimarySkillComponent', () => {
  let component: AddEditPrimarySkillComponent;
  let fixture: ComponentFixture<AddEditPrimarySkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEditPrimarySkillComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditPrimarySkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
