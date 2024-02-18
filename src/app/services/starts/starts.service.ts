import { Injectable } from '@angular/core';

import { StartsServiceModel } from './starts.service.model';

@Injectable({
  providedIn: 'root'
})
export class StartsService implements StartsServiceModel {
  spaceTitle = 'Wellbeing starts with well doing'
  title = 'Wellbeing starts with welldoing'
  plantTitle = 'Plant Protective'
}
