import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderM4Component } from './slider-m4.component';

describe('SliderM4Component', () => {
  let component: SliderM4Component;
  let fixture: ComponentFixture<SliderM4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SliderM4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SliderM4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
