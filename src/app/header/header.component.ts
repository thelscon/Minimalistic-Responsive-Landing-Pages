import { Component } from '@angular/core';

import { LogotypeComponent } from './logotype/logotype.component';
import { MenuComponent } from './menu/menu.component';

@Component({
  selector: 'mn-header',
  standalone: true,
  imports: [LogotypeComponent , MenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
