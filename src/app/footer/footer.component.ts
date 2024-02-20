import { Component } from '@angular/core';

import { FooterComponentModel } from './footer.component.model';

import { NavigationService } from '../services/navigation/navigation.service';
import { LogotypeService } from '../services/logotype/logotype.service';

@Component({
  selector: 'mn-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements FooterComponentModel {
  get navigationItems () {
    return this.navigationService.items
  }
  get logotypeName () {
    return this.logotypeService.name
  }

  constructor (
    private readonly navigationService : NavigationService ,
    private readonly logotypeService : LogotypeService
  ) {}
}
