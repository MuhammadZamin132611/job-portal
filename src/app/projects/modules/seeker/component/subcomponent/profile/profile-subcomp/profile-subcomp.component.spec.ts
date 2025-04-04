import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSubcompComponent } from './profile-subcomp.component';

describe('ProfileSubcompComponent', () => {
  let component: ProfileSubcompComponent;
  let fixture: ComponentFixture<ProfileSubcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileSubcompComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileSubcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
