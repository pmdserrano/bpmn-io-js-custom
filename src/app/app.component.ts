import { Component } from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {HeaderComponent} from './components/layouts/header/header.component';
import {FooterComponent} from './components/layouts/footer/footer.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { faHome, faUserCheck, faSpinner, faMicrochip, faSitemap } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, HeaderComponent, FooterComponent, MatSidenavModule, MatListModule, FontAwesomeModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'tsg-mktplc';
  faHome = faHome;
  faUserCheck = faUserCheck;
  faSpinner = faSpinner;
  faMicrochip = faMicrochip;
  faSitemap = faSitemap;

  constructor(private router: Router) {}

  forwardToComponent(route: string) {

    switch (route) {
      case 'createWorkflow': {
        this.router.navigate(['/createWorkflow']);
        break;
      }
    }

  }

}
