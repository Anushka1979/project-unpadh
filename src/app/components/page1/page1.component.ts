import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { Page2Component } from '../page2/page2.component';
import { Page3Component } from '../page3/page3.component';
import { Page4Component } from '../page4/page4.component';
import { Page5Component } from '../page5/page5.component';
import { Page6Component } from '../page6/page6.component';
import { Page7Component } from '../page7/page7.component';

@Component({
  selector: 'app-page1',
  standalone: true,
  imports: [NavComponent,Page2Component,Page3Component,Page4Component,Page5Component,Page6Component,Page7Component],
  templateUrl: './page1.component.html',
  styleUrl: './page1.component.css'
})
export class Page1Component {

}
