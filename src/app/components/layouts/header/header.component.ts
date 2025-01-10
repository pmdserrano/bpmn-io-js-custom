import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import {CreateWorkflowComponent} from '../../create-workflow/create-workflow.component';
import {Router} from '@angular/router';

@Component({
  selector: 'tsg-mktplc-header',
  imports: [MatTabsModule],
  templateUrl: './header.component.html',
  standalone: true,
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private router: Router) {

  }


  onTabChange(event: any) {
    switch (event) {
      case 'createWorkflow': {
        this.router.navigate(['/createWorkflow']);
        break;
      }
    }
    console.log('Tab change event:', event);
  }

}
