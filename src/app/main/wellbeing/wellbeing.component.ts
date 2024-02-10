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
  windowWidth = window.innerWidth
  title = this.changeTitle ()
  
  constructor (
    readonly wellbeingService : WellbeingService ,
    readonly windowService : WindowService) {
      windowService.resize.subscribe (() => {
        this.windowWidth = window.innerWidth
        if (window.innerWidth <= 530) {
          this.title = this.changeTitle ()
        }
        else {
          if (window.innerWidth < 1024) {
            this.title = wellbeingService.spaceTitle
          }
          else {
            this.title = wellbeingService.title
          }
        }
      })
  }

  changeTitle () {
    const arrayTitle = [...this.wellbeingService.spaceTitle]
    let firstSpace = false
    return arrayTitle.map ((value) => {
      if (window.innerWidth <= 530 && value === ' ' && !firstSpace) {
        firstSpace = !firstSpace
        return '<br>'
      }
      else {
        return value
      }      
    }).join ('')
  }
}
