import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Imgslider2Component } from './imgslider2.component';

describe('Imgslider2Component', () => {
  let component: Imgslider2Component;
  let fixture: ComponentFixture<Imgslider2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Imgslider2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Imgslider2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
