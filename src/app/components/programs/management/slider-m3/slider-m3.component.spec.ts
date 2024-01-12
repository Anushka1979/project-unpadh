import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderM3Component } from './slider-m3.component';

describe('SliderM3Component', () => {
  let component: SliderM3Component;
  let fixture: ComponentFixture<SliderM3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SliderM3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SliderM3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
