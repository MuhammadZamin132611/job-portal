import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuriterBasicProfileSearchComponent } from './recuriter-basic-profile-search.component';

describe('RecuriterBasicProfileSearchComponent', () => {
  let component: RecuriterBasicProfileSearchComponent;
  let fixture: ComponentFixture<RecuriterBasicProfileSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecuriterBasicProfileSearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecuriterBasicProfileSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
