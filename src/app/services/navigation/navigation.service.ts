import { Injectable } from '@angular/core';

import { NavigationItems } from './navigation.service.model';
import { NavigationServiceModel } from './navigation.service.model';

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
