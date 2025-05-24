import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuriterProfileSearchComponent } from './recuriter-profile-search.component';

describe('RecuriterProfileSearchComponent', () => {
  let component: RecuriterProfileSearchComponent;
  let fixture: ComponentFixture<RecuriterProfileSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecuriterProfileSearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecuriterProfileSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
