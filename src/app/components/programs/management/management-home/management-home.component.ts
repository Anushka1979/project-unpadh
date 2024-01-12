import { Component } from '@angular/core';
import { NavComponent } from '../../../nav/nav.component';
import { SliderM1Component } from '../slider-m1/slider-m1.component';
import { SliderM2Component } from '../slider-m2/slider-m2.component';
import { SliderM3Component } from '../slider-m3/slider-m3.component';
import { SliderM4Component } from '../slider-m4/slider-m4.component';
import { Page7Component } from '../../../page7/page7.component';

@Component({
  selector: 'app-management-home',
  standalone: true,
  imports: [
    NavComponent,
    SliderM1Component,
    SliderM2Component,
    SliderM3Component,
    SliderM4Component,
    Page7Component
  ],
  templateUrl: './management-home.component.html',
  styleUrl: './management-home.component.css',
})
export class ManagementHomeComponent {}
