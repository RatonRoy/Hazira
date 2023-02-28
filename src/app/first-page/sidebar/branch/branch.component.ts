import { Component } from '@angular/core';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css'],
})
export class BranchComponent {
  faAngleDown = faAngleDown;
  faCodeBranch = faCodeBranch;
}
