import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuriterProfileImageComponent } from './recuriter-profile-image.component';

describe('RecuriterProfileImageComponent', () => {
  let component: RecuriterProfileImageComponent;
  let fixture: ComponentFixture<RecuriterProfileImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecuriterProfileImageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecuriterProfileImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
