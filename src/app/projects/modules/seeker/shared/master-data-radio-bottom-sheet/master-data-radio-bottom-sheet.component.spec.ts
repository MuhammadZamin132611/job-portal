import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterDataRadioBottomSheetComponent } from './master-data-radio-bottom-sheet.component';

describe('MasterDataRadioBottomSheetComponent', () => {
  let component: MasterDataRadioBottomSheetComponent;
  let fixture: ComponentFixture<MasterDataRadioBottomSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MasterDataRadioBottomSheetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterDataRadioBottomSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
