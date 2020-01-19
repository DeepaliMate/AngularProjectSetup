import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgCardComponent } from './msg-card.component';

describe('MsgCardComponent', () => {
  let component: MsgCardComponent;
  let fixture: ComponentFixture<MsgCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsgCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsgCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
