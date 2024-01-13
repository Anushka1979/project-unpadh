import { Component } from '@angular/core';
import { NavComponent } from '../../../nav/nav.component';
import { SliderDS1Component } from '../slider-ds1/slider-ds1.component';
import { SliderDS2Component } from '../slider-ds2/slider-ds2.component';
import { SliderDS3Component } from '../slider-ds3/slider-ds3.component';
import { SliderDS4Component } from '../slider-ds4/slider-ds4.component';
import { Page7Component } from '../../../page7/page7.component';

@Component({
  selector: 'app-data-science-home',
  standalone: true,
  imports: [
    NavComponent,
    SliderDS1Component,
    SliderDS2Component,
    SliderDS3Component,
    SliderDS4Component,
    Page7Component,
  ],
  templateUrl: './data-science-home.component.html',
  styleUrl: './data-science-home.component.css',
})
export class DataScienceHomeComponent {}
