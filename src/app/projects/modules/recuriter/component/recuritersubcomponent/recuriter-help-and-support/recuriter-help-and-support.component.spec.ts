import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuriterHelpAndSupportComponent } from './recuriter-help-and-support.component';

describe('RecuriterHelpAndSupportComponent', () => {
  let component: RecuriterHelpAndSupportComponent;
  let fixture: ComponentFixture<RecuriterHelpAndSupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecuriterHelpAndSupportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecuriterHelpAndSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
