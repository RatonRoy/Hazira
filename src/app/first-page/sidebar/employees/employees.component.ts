import { Component } from '@angular/core';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
})
export class EmployeesComponent {
  faAngleDown = faAngleDown;
  faCircleUser = faCircleUser;
}
