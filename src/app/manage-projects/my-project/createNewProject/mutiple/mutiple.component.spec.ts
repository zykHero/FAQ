import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MutipleComponent } from './mutiple.component';

describe('MutipleComponent', () => {
  let component: MutipleComponent;
  let fixture: ComponentFixture<MutipleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MutipleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MutipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
