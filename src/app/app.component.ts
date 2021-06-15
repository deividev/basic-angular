import { Component } from '@angular/core';
import { faCoffee, faUser, faBars, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'padel-search';

  faCoffee = faCoffee;
  userIcon = faUser;
  menuIcon = faBars;
  searchIcon = faSearch;
}
