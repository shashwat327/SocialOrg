import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrakingnewzComponent } from './brakingnewz.component';

describe('BrakingnewzComponent', () => {
  let component: BrakingnewzComponent;
  let fixture: ComponentFixture<BrakingnewzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrakingnewzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrakingnewzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
