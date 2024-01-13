import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderDS1Component } from './slider-ds1.component';

describe('SliderDS1Component', () => {
  let component: SliderDS1Component;
  let fixture: ComponentFixture<SliderDS1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SliderDS1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SliderDS1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
