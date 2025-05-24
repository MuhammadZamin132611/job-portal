import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuriterRequirementComponent } from './recuriter-requirement.component';

describe('RecuriterRequirementComponent', () => {
  let component: RecuriterRequirementComponent;
  let fixture: ComponentFixture<RecuriterRequirementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecuriterRequirementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecuriterRequirementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
