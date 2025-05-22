import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuriterLoginSideImageComponent } from './recuriter-login-side-image.component';

describe('RecuriterLoginSideImageComponent', () => {
  let component: RecuriterLoginSideImageComponent;
  let fixture: ComponentFixture<RecuriterLoginSideImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecuriterLoginSideImageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecuriterLoginSideImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
