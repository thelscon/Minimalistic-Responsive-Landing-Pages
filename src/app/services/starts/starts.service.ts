import { Injectable } from '@angular/core';

import { StartsServiceModel } from './starts.service.model';

@Injectable({
  providedIn: 'root'
})
export class StartsService implements StartsServiceModel {
  spaceTitle = 'Wellbeing starts with well doing'
  title = 'Wellbeing starts with welldoing'
  content = 'Lorem ipsum dolor sit amet consectetur. Quam ut consequat at a. Diam lacus platea orci vel elit blandit facilisis enim risus. Ut tristique eget integer odio nec.'
  button = 'Join now'
  plantTitle = 'Plant Protective'
}
