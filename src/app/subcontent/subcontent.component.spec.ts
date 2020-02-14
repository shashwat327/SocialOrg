import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcontentComponent } from './subcontent.component';

describe('SubcontentComponent', () => {
  let component: SubcontentComponent;
  let fixture: ComponentFixture<SubcontentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubcontentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
