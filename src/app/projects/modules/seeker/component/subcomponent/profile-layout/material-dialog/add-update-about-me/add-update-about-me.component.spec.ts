import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdateAboutMeComponent } from './add-update-about-me.component';

describe('AddUpdateAboutMeComponent', () => {
  let component: AddUpdateAboutMeComponent;
  let fixture: ComponentFixture<AddUpdateAboutMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddUpdateAboutMeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddUpdateAboutMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
