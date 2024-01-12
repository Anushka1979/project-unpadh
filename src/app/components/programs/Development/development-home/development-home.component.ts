import { Component } from '@angular/core';
import { NavComponent } from '../../../nav/nav.component';
import { SliderD1Component } from '../slider-d1/slider-d1.component';
import { SliderD2Component } from '../slider-d2/slider-d2.component';
import { SliderD3Component } from '../slider-d3/slider-d3.component';
import { SliderD4Component } from '../slider-d4/slider-d4.component';
import { Page7Component } from '../../../page7/page7.component';

@Component({
  selector: 'app-development-home',
  standalone: true,
  imports: [
    NavComponent,
    SliderD1Component,
    SliderD2Component,
    SliderD3Component,
    SliderD4Component,
    Page7Component
  ],
  templateUrl: './development-home.component.html',
  styleUrl: './development-home.component.css',
})
export class DevelopmentHomeComponent {}
