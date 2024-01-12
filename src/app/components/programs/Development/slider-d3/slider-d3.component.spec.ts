import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderD3Component } from './slider-d3.component';

describe('SliderD3Component', () => {
  let component: SliderD3Component;
  let fixture: ComponentFixture<SliderD3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SliderD3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SliderD3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
