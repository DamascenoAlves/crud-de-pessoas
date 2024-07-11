import { Component } from '@angular/core';
import { MenuItem } from './interfaces/menu-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crud-contatos';

  items: MenuItem[] = [
    {
      'name': 'Home',
      'url': '/'
    },
    {
      'name': 'Profiles',
      'url': '/profile',
    },
  ]
  
}
