import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderM2Component } from './slider-m2.component';

describe('SliderM2Component', () => {
  let component: SliderM2Component;
  let fixture: ComponentFixture<SliderM2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SliderM2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SliderM2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
