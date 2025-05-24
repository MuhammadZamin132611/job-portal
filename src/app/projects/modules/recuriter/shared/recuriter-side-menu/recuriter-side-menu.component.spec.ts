import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuriterSideMenuComponent } from './recuriter-side-menu.component';

describe('RecuriterSideMenuComponent', () => {
  let component: RecuriterSideMenuComponent;
  let fixture: ComponentFixture<RecuriterSideMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecuriterSideMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecuriterSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
