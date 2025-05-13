import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBasicDetailsComponent } from './update-basic-details.component';

describe('UpdateBasicDetailsComponent', () => {
  let component: UpdateBasicDetailsComponent;
  let fixture: ComponentFixture<UpdateBasicDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateBasicDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateBasicDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
