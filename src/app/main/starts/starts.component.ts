import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WindowService } from '../../services/window/window.service';
import { StartsService } from '../../services/starts/starts.service';
import { StartsComponentModel } from './starts.component.model';

@Component({
  selector: 'mn-starts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './starts.component.html',
  styleUrl: './starts.component.css'
})
export class StartsComponent implements StartsComponentModel {
  get spaceTitle () {
    return this.startsService.spaceTitle
  }
  get title () {
    return this.startsService.title
  }
  get content () {
    return this.startsService.content
  }
  get buttonText () {
    return this.startsService.buttonText
  }
  get plantTitle () {
    return this.startsService.plantTitle
  }
  get pathToImage () {
    return this.startsService.pathToImage
  }
  get windowWidth () {
    return this.windowService.width
  }

  constructor (
    private readonly windowService : WindowService ,
    private readonly startsService : StartsService
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
