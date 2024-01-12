import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { Page7Component } from '../page7/page7.component';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [NavComponent,Page7Component],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {

}
