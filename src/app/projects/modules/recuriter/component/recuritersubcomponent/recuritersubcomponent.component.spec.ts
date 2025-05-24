import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuritersubcomponentComponent } from './recuritersubcomponent.component';

describe('RecuritersubcomponentComponent', () => {
  let component: RecuritersubcomponentComponent;
  let fixture: ComponentFixture<RecuritersubcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecuritersubcomponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecuritersubcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
