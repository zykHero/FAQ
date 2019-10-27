import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadionGropComponent } from './radion-grop.component';

describe('RadionGropComponent', () => {
  let component: RadionGropComponent;
  let fixture: ComponentFixture<RadionGropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadionGropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadionGropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
