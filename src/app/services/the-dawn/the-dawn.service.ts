import { Injectable } from '@angular/core';

import { TheDawnServiceModel } from './the-dawn.service.model';

@Injectable({
  providedIn: 'root'
})
export class TheDawnService implements TheDawnServiceModel{
  title = 'The dawn of a new era in health is here'
  content = 'Lorem ipsum dolor sit amet consectetur. Quam ut consequat at a. Diam lacus  platea orci vel elit blandit facilisis'
  buttonText = 'Join now'
  pathToFirstImage = '../../../assets/images/td1.png'
  pathToSecondImage = '../../../assets/images/td2.png'
}
