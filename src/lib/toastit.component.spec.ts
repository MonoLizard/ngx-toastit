import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastitComponent } from './toastit.component';

describe('ToastitComponent', () => {
  let component: ToastitComponent;
  let fixture: ComponentFixture<ToastitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToastitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToastitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
