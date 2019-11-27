import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboxsComponent } from './comboxs.component';

describe('ComboxsComponent', () => {
  let component: ComboxsComponent;
  let fixture: ComponentFixture<ComboxsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComboxsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComboxsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
