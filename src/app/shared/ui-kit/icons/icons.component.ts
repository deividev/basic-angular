import { Component, Input, OnInit } from '@angular/core';

import { faCoffee, faUser, faBars, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  faCoffee = faCoffee;
  userIcon = faUser;
  menuIcon = faBars;
  searchIcon = faSearch;

  @Input() iconName: any;

  constructor() { }

  ngOnInit(): void {
  }

}
