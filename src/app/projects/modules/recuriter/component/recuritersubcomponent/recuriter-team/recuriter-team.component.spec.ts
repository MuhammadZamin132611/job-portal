import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuriterTeamComponent } from './recuriter-team.component';

describe('RecuriterTeamComponent', () => {
  let component: RecuriterTeamComponent;
  let fixture: ComponentFixture<RecuriterTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecuriterTeamComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecuriterTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
