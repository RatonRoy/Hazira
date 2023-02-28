import { Component } from '@angular/core';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-shifting-navbar',
  templateUrl: './shifting-navbar.component.html',
  styleUrls: ['./shifting-navbar.component.css']
})
export class ShiftingNavbarComponent {
  faAngleDown = faAngleDown;

}
