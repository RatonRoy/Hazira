import { Component } from '@angular/core';
import { faGear, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faDiscourse } from '@fortawesome/free-brands-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faMessage } from '@fortawesome/free-regular-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { faGripHorizontal } from '@fortawesome/free-solid-svg-icons';
import { faPager } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header-second',
  templateUrl: './header-second.component.html',
  styleUrls: ['./header-second.component.css'],
})
export class HeaderSecondComponent {
  faGear = faGear;
  faAngleDown = faAngleDown;
  faDiscourse = faDiscourse;
  faUser = faUser;
  faMessage = faMessage;
  faClock = faClock;
  faBagShopping = faBagShopping;
  faGripHorizontal = faGripHorizontal;
  faPager = faPager;
}
