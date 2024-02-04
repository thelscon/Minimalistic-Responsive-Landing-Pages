import { Component } from '@angular/core';

import { MenuComponentModel } from './menu.model';
import { WindowService } from '../../services/window/window.service';
import { NavigationItems } from '../../services/navigation/navigation.model';
import { NavigationService } from '../../services/navigation/navigation.service';

@Component({
  selector: 'mn-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements MenuComponentModel {
  buttonMenuState = window.innerWidth < 1024 ? true : false
  navigationState = window.innerWidth < 1024 ? false : true
  navigationItems : NavigationItems[]

  constructor (windowService : WindowService , navigationService : NavigationService) {
    this.navigationItems = navigationService.items

    windowService.resize.subscribe (() => {
      const windowInnerWidth = window.innerWidth
      
      if (windowInnerWidth < 1024) {
        if (this.buttonMenuState ===  false) {
          this.buttonMenuState = true
        }
      }
      else {
        if (this.buttonMenuState === true) {
          this.buttonMenuState = false
        }
      }

      if (windowInnerWidth < 1024) {
        if (this.navigationState ===  true) {
          this.navigationState = false
        }
      }
      else {
        if (this.navigationState === false) {
          this.navigationState = true
        }
      }
    })
  }
}
