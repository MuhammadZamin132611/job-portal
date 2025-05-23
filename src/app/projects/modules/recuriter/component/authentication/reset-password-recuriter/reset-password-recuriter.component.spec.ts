import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetPasswordRecuriterComponent } from './reset-password-recuriter.component';

describe('ResetPasswordRecuriterComponent', () => {
  let component: ResetPasswordRecuriterComponent;
  let fixture: ComponentFixture<ResetPasswordRecuriterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResetPasswordRecuriterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResetPasswordRecuriterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
