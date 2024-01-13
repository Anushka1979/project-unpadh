import { Component } from '@angular/core';
import { NavComponent } from '../../../nav/nav.component';
import { SliderAI1Component } from '../slider-ai1/slider-ai1.component';
import { SliderAI2Component } from '../slider-ai2/slider-ai2.component';
import { SliderAI3Component } from '../slider-ai3/slider-ai3.component';
import { SliderAI4Component } from '../slider-ai4/slider-ai4.component';
import { Page7Component } from '../../../page7/page7.component';

@Component({
  selector: 'app-ai-home',
  standalone: true,
  imports: [
    NavComponent,
    SliderAI1Component,
    SliderAI2Component,
    SliderAI3Component,
    SliderAI4Component,
    Page7Component
  ],
  templateUrl: './ai-home.component.html',
  styleUrl: './ai-home.component.css',
})
export class AiHomeComponent {}
