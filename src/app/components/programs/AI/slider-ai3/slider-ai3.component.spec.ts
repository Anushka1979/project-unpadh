import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderAI3Component } from './slider-ai3.component';

describe('SliderAI3Component', () => {
  let component: SliderAI3Component;
  let fixture: ComponentFixture<SliderAI3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SliderAI3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SliderAI3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
