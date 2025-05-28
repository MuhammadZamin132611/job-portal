import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuriterProfileSearchMainComponent } from './recuriter-profile-search-main.component';

describe('RecuriterProfileSearchMainComponent', () => {
  let component: RecuriterProfileSearchMainComponent;
  let fixture: ComponentFixture<RecuriterProfileSearchMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecuriterProfileSearchMainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecuriterProfileSearchMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
