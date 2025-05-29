import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuriterRequirementMainComponent } from './recuriter-requirement-main.component';

describe('RecuriterRequirementMainComponent', () => {
  let component: RecuriterRequirementMainComponent;
  let fixture: ComponentFixture<RecuriterRequirementMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecuriterRequirementMainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecuriterRequirementMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
