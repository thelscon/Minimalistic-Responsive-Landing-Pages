import { Injectable } from '@angular/core';

import { NavigationItems } from './navigation.model';
import { NavigationServiceModel } from './navigation.model';

@Injectable({
  providedIn: 'root'
})
export class NavigationService implements NavigationServiceModel {
  items = [
    NavigationItems.ABOUT ,
    NavigationItems.SERVICES ,
    NavigationItems.TEAM ,
    NavigationItems.CONTACT
  ]
}
