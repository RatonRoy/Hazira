import { Component } from '@angular/core';
import { faAngleDown,  } from '@fortawesome/free-solid-svg-icons';
import { faStackExchange } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-designations',
  templateUrl: './designations.component.html',
  styleUrls: ['./designations.component.css'],
})
export class DesignationsComponent {
  faAngleDown = faAngleDown;
  faStackExchange = faStackExchange;
}
