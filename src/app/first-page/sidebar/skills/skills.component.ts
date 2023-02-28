import { Component } from '@angular/core';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
// import { faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent {
  faAngleDown = faAngleDown;
  faBagShopping = faBagShopping;
}
