import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderDS4Component } from './slider-ds4.component';

describe('SliderDS4Component', () => {
  let component: SliderDS4Component;
  let fixture: ComponentFixture<SliderDS4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SliderDS4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SliderDS4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
