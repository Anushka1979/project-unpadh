import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderAI2Component } from './slider-ai2.component';

describe('SliderAI2Component', () => {
  let component: SliderAI2Component;
  let fixture: ComponentFixture<SliderAI2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SliderAI2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SliderAI2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
