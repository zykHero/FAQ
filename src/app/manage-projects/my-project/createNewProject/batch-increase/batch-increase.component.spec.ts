import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchIncreaseComponent } from './batch-increase.component';

describe('BatchIncreaseComponent', () => {
  let component: BatchIncreaseComponent;
  let fixture: ComponentFixture<BatchIncreaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatchIncreaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatchIncreaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
