import { Injectable } from '@angular/core';

import { FrashOrganicProduceServiceModel } from './frash-organic-produce.service.model';

@Injectable({
  providedIn: 'root'
})
export class FrashOrganicProduceService implements FrashOrganicProduceServiceModel {
  pathToImage = '../../../assets/images/fop.png'
  title = 'Fresh organic produce'
  content = 'Lorem ipsum dolor sit amet consectetur. Quam ut consequat at a. Diam lacus platea orci vel elit blandit facilisis enim risus. Ut tristique eget integer odio nec vulputate consequat. Elit mattis ac in amet sit viverra.'
  listContent = 'Lorem ipsum dolor sit amet consectetur. Quam ut consequat at a. Diam lacus platea'  
}
