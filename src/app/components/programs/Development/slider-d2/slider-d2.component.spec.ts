import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderD2Component } from './slider-d2.component';

describe('SliderD2Component', () => {
  let component: SliderD2Component;
  let fixture: ComponentFixture<SliderD2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SliderD2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SliderD2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
