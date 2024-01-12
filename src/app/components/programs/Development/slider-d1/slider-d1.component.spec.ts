import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderD1Component } from './slider-d1.component';

describe('SliderD1Component', () => {
  let component: SliderD1Component;
  let fixture: ComponentFixture<SliderD1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SliderD1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SliderD1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
