import { Component } from '@angular/core';
import { faDiscourse } from '@fortawesome/free-brands-svg-icons';
import { faGear, faAngleDown } from '@fortawesome/free-solid-svg-icons';
// import {}

@Component({
  selector: 'app-header-top',
  templateUrl: './header-top.component.html',
  styleUrls: ['./header-top.component.css'],
})
export class HeaderTopComponent {
  faDiscourse = faDiscourse;
  faGear = faGear;
  faAngleDown = faAngleDown;
}
