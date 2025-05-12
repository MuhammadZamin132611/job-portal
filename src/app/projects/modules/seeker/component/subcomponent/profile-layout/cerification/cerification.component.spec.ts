import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CerificationComponent } from './cerification.component';

describe('CerificationComponent', () => {
  let component: CerificationComponent;
  let fixture: ComponentFixture<CerificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CerificationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
