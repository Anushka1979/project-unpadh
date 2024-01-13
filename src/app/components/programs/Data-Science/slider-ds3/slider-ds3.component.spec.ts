import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderDS3Component } from './slider-ds3.component';

describe('SliderDS3Component', () => {
  let component: SliderDS3Component;
  let fixture: ComponentFixture<SliderDS3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SliderDS3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SliderDS3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
