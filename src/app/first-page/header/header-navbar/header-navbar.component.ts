import { Component } from '@angular/core';
// import { faGridHorizontal } from '@fortawesome/free-solid';
import { faBarChart } from '@fortawesome/free-regular-svg-icons';


@Component({
  selector: 'app-header-navbar',
  templateUrl: './header-navbar.component.html',
  styleUrls: ['./header-navbar.component.css'],
})
export class HeaderNavbarComponent {
  /* <i class="fa-solid fa-grid-horizontal"></i> */
  // faGridHorizontal = faGridHorizontal;
  faBarChart = faBarChart;
}
