import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuriterBoolaenProfileSearchComponent } from './recuriter-boolaen-profile-search.component';

describe('RecuriterBoolaenProfileSearchComponent', () => {
  let component: RecuriterBoolaenProfileSearchComponent;
  let fixture: ComponentFixture<RecuriterBoolaenProfileSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecuriterBoolaenProfileSearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecuriterBoolaenProfileSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
