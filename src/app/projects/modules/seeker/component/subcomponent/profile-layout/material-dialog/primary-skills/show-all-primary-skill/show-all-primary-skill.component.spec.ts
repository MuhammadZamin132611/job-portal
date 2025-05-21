import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllPrimarySkillComponent } from './show-all-primary-skill.component';

describe('ShowAllPrimarySkillComponent', () => {
  let component: ShowAllPrimarySkillComponent;
  let fixture: ComponentFixture<ShowAllPrimarySkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowAllPrimarySkillComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowAllPrimarySkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
