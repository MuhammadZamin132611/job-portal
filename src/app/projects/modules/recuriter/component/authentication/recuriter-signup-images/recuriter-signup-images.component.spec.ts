import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuriterSignupImagesComponent } from './recuriter-signup-images.component';

describe('RecuriterSignupImagesComponent', () => {
  let component: RecuriterSignupImagesComponent;
  let fixture: ComponentFixture<RecuriterSignupImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecuriterSignupImagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecuriterSignupImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
