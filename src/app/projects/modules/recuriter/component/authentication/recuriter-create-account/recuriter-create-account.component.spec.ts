import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuriterCreateAccountComponent } from './recuriter-create-account.component';

describe('RecuriterCreateAccountComponent', () => {
  let component: RecuriterCreateAccountComponent;
  let fixture: ComponentFixture<RecuriterCreateAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecuriterCreateAccountComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecuriterCreateAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
