import { Injectable } from '@angular/core';

import { YouAreServiceModel } from './you-are.service.model';

@Injectable({
  providedIn: 'root'
})
export class YouAreService implements YouAreServiceModel {
  title = 'You are what you eat'
  figureContent = 'Lorem ipsum dolor sit amet consectetur. Quam ut consequat at a. Diam lacus platea orci vel elit.'
}
