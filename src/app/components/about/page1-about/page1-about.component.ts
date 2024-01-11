import { Component } from '@angular/core';
import { NavComponent } from '../../nav/nav.component';
import { Page2AboutComponent } from '../page2-about/page2-about.component';
import { Page3AboutComponent } from '../page3-about/page3-about.component';
import { Page4AboutComponent } from '../page4-about/page4-about.component';
import { Page7Component } from '../../page7/page7.component';

@Component({
  selector: 'app-page1-about',
  standalone: true,
  imports: [NavComponent, Page2AboutComponent,Page3AboutComponent,Page4AboutComponent,Page7Component],
  templateUrl: './page1-about.component.html',
  styleUrl: './page1-about.component.css'
})
export class Page1AboutComponent {

}
