import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BetweenstationsComponent } from './betweenstations.component';

describe('BetweenstationsComponent', () => {
  let component: BetweenstationsComponent;
  let fixture: ComponentFixture<BetweenstationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BetweenstationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BetweenstationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
