import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuriterAdminComponent } from './recuriter-admin.component';

describe('RecuriterAdminComponent', () => {
  let component: RecuriterAdminComponent;
  let fixture: ComponentFixture<RecuriterAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecuriterAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecuriterAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
