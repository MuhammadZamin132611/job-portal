import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimarySkillsComponent } from './primary-skills.component';

describe('PrimarySkillsComponent', () => {
  let component: PrimarySkillsComponent;
  let fixture: ComponentFixture<PrimarySkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimarySkillsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimarySkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
