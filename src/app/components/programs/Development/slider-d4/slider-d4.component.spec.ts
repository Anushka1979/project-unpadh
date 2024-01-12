import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderD4Component } from './slider-d4.component';

describe('SliderD4Component', () => {
  let component: SliderD4Component;
  let fixture: ComponentFixture<SliderD4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SliderD4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SliderD4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
