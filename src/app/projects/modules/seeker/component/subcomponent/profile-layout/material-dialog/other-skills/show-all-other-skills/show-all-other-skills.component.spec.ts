import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllOtherSkillsComponent } from './show-all-other-skills.component';

describe('ShowAllOtherSkillsComponent', () => {
  let component: ShowAllOtherSkillsComponent;
  let fixture: ComponentFixture<ShowAllOtherSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowAllOtherSkillsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowAllOtherSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
