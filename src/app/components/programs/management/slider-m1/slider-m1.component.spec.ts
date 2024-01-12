import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderM1Component } from './slider-m1.component';

describe('SliderM1Component', () => {
  let component: SliderM1Component;
  let fixture: ComponentFixture<SliderM1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SliderM1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SliderM1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
