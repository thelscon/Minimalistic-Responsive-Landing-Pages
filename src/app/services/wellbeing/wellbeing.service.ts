import { Injectable } from '@angular/core';

import { WellbeingServiceModel } from './wellbeing.service.model';

@Injectable({
  providedIn: 'root'
})
export class WellbeingService implements WellbeingServiceModel {
  title = 'Wellbeing is well doing'
  content = 'Lorem ipsum dolor sit amet consectetur. Quam ut consequat at a. Diam lacus platea orci vel elit.'
}
