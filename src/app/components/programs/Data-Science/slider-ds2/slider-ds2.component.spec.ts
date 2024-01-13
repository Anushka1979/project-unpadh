import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderDS2Component } from './slider-ds2.component';

describe('SliderDS2Component', () => {
  let component: SliderDS2Component;
  let fixture: ComponentFixture<SliderDS2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SliderDS2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SliderDS2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
