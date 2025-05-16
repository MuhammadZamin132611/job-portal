import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterDateBottomSheetComponent } from './master-date-bottom-sheet.component';

describe('MasterDateBottomSheetComponent', () => {
  let component: MasterDateBottomSheetComponent;
  let fixture: ComponentFixture<MasterDateBottomSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MasterDateBottomSheetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterDateBottomSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
