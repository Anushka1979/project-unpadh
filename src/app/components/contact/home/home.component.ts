import { Component } from '@angular/core';
import { NavComponent } from '../../nav/nav.component';
import { Page7Component } from '../../page7/page7.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavComponent,Page7Component],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
