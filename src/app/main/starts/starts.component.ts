import { Component } from '@angular/core';

import { WindowService } from '../../services/window/window.service';
import { StartsService } from '../../services/starts/starts.service';
import { StartsComponentModel } from './starts.component.model';

@Component({
  selector: 'mn-starts',
  standalone: true,
  imports: [],
  templateUrl: './starts.component.html',
  styleUrl: './starts.component.css'
})
export class StartsComponent implements StartsComponentModel {
  constructor (
    readonly windowService : WindowService ,
    readonly startsService : StartsService
  ) {}

  getTitle () {    
    return this.windowService.width < 1024 
      ? this.windowService.width < 504 ? this.newLineStartingWithSpace (this.startsService.spaceTitle) : this.startsService.spaceTitle
      : this.startsService.title
  }

  newLineStartingWithSpace (value : string) {
    let amount = 0
    let returnValue = [...value]

    for (let index = 0 ; index <= returnValue.length ; ++index) {
      if (returnValue[index] === ' ') {
        if (amount  === 1) {
          returnValue.splice (index , 1 , '<br>')
          break;
        }
        else {
          ++amount
        }
      }
    }

    return returnValue.join ('')
  }
}
