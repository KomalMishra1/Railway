import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainscheduleComponent } from './trainschedule.component';

describe('TrainscheduleComponent', () => {
  let component: TrainscheduleComponent;
  let fixture: ComponentFixture<TrainscheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainscheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainscheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
