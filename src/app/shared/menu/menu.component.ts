import { Component } from '@angular/core';

interface MenuItem {
  path: string;
  text: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent {
  public menuItems: MenuItem[] = [
    { path: '/charts/bar', text: 'Bar' },
    { path: '/charts/double-bar', text: 'Double Bar' },
    { path: '/charts/donut', text: 'Donut' },
    { path: '/charts/http-donut', text: 'Http Donut' },
  ];

  constructor() {}
}
