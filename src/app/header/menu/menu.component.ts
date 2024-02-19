import { Component } from '@angular/core';

import { MenuComponentModel } from './menu.component.model';
import { WindowService } from '../../services/window/window.service';
import { NavigationItems } from '../../services/navigation/navigation.service.model';
import { NavigationService } from '../../services/navigation/navigation.service';

@Component({
  selector: 'mn-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements MenuComponentModel {
  menuButtonVisibility = this.windowService.width < 1024 ? true : false
  navigationVisibility = this.windowService.width < 1024 ? false : true
  navigationItems  = this.navigationService.items

  constructor (
      private readonly windowService : WindowService ,
      private readonly navigationService : NavigationService
  ) {
    windowService.resize.subscribe (() => {      
      if (this.windowService.width < 1024) {
        if (this.menuButtonVisibility ===  false) {
          this.menuButtonVisibility = true
        }
      }
      else {
        if (this.menuButtonVisibility === true) {
          this.menuButtonVisibility = false
        }
      }

      if (this.windowService.width < 1024) {
        if (this.navigationVisibility ===  true) {
          this.navigationVisibility = false
        }
      }
      else {
        if (this.navigationVisibility === false) {
          this.navigationVisibility = true
        }
      }
    })
  }
}
