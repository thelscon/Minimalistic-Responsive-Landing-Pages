import { Component } from '@angular/core';

import { WindowService } from '../../services/window/window.service';
import { YouAreComponentModel } from './you-are.component.model';

@Component({
  selector: 'mn-you-are',
  standalone: true,
  imports: [],
  templateUrl: './you-are.component.html',
  styleUrl: './you-are.component.css'
})
export class YouAreComponent implements YouAreComponentModel {
  windowSize = window.innerWidth

  constructor (readonly windowService : WindowService) {
    windowService.resize.subscribe (() => {
      this.windowSize = window.innerWidth
    })
  }
}
