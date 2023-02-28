import { Component } from '@angular/core';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faPager } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar-second',
  templateUrl: './sidebar-second.component.html',
  styleUrls: ['./sidebar-second.component.css'],
})
export class SidebarSecondComponent {
  faUser = faUser;
  faClock = faClock;
  faPager = faPager;
}
