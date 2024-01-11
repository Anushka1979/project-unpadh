import { Component } from '@angular/core';
import { NavComponent } from '../../nav/nav.component';
import { Slider1Component } from '../slider1/slider1.component';
import { Slider2Component } from '../slider2/slider2.component';
import { Slider3Component } from '../slider3/slider3.component';
import { Slider4Component } from '../slider4/slider4.component';
import { Page7Component } from '../../page7/page7.component';
import { ProgramNavComponent } from '../program-nav/program-nav.component';

@Component({
  selector: 'app-programs-home',
  standalone: true,
  imports: [
    ProgramNavComponent,
    Slider1Component,
    Slider2Component,
    Slider3Component,
    Slider4Component,
    Page7Component
  ],
  templateUrl: './programs-home.component.html',
  styleUrl: './programs-home.component.css',
})
export class ProgramsHomeComponent {}
