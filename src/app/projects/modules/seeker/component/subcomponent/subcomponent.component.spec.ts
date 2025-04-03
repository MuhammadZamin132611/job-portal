import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcomponentComponent } from './subcomponent.component';

describe('SubcomponentComponent', () => {
  let component: SubcomponentComponent;
  let fixture: ComponentFixture<SubcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubcomponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
