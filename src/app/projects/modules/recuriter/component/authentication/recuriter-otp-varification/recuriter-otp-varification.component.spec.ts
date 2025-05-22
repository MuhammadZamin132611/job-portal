import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuriterOtpVarificationComponent } from './recuriter-otp-varification.component';

describe('RecuriterOtpVarificationComponent', () => {
  let component: RecuriterOtpVarificationComponent;
  let fixture: ComponentFixture<RecuriterOtpVarificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecuriterOtpVarificationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecuriterOtpVarificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
