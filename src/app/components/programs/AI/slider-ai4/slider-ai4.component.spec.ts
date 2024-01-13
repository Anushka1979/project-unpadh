import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderAI4Component } from './slider-ai4.component';

describe('SliderAI4Component', () => {
  let component: SliderAI4Component;
  let fixture: ComponentFixture<SliderAI4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SliderAI4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SliderAI4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
