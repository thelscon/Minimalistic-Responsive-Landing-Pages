import { Component } from '@angular/core';

import { WellbeingComponentModel } from './wellbeing.component.model';
import { WellbeingService } from '../../services/wellbeing/wellbeing.service';
import { WindowService } from '../../services/window/window.service';

@Component({
  selector: 'mn-wellbeing',
  standalone: true,
  imports: [],
  templateUrl: './wellbeing.component.html',
  styleUrl: './wellbeing.component.css'
})
export class WellbeingComponent implements WellbeingComponentModel {
  finalTitle = this.changeTitle ()

  get windowWidth () {
    return this.windowService.width
  }
  get title () {
    return this.wellbeingService.title
  }
  get spaceTitle () {
    return this.wellbeingService.spaceTitle
  }
  get content () {
    return this.wellbeingService.content
  }
  
  constructor (
    private readonly wellbeingService : WellbeingService ,
    private readonly windowService : WindowService) {
      windowService.resize.subscribe (() => {
        if (this.windowService.width <= 530) {
          this.finalTitle = this.changeTitle ()
        }
        else {
          if (this.windowService.width < 1024) {
            this.finalTitle = this.wellbeingService.spaceTitle
          }
          else {
            this.finalTitle = this.wellbeingService.title
          }
        }
      })
  }

  changeTitle () {
    const arrayTitle = [...this.wellbeingService.spaceTitle]
    let firstSpace = false
    return arrayTitle.map ((value) => {
      if (this.windowService.width <= 530 && value === ' ' && !firstSpace) {
        firstSpace = !firstSpace
        return '<br>'
      }
      else {
        return value
      }      
    }).join ('')
  }
}
