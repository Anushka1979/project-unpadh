import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderAI1Component } from './slider-ai1.component';

describe('SliderAI1Component', () => {
  let component: SliderAI1Component;
  let fixture: ComponentFixture<SliderAI1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SliderAI1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SliderAI1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
