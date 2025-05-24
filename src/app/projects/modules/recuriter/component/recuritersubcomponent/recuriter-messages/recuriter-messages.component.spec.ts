import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuriterMessagesComponent } from './recuriter-messages.component';

describe('RecuriterMessagesComponent', () => {
  let component: RecuriterMessagesComponent;
  let fixture: ComponentFixture<RecuriterMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecuriterMessagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecuriterMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
