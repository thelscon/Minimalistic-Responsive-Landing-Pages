import { Component } from '@angular/core';

import { WindowService } from '../../services/window/window.service';
import { YouAreComponentModel } from './you-are.component.model';
import { YouAreService } from '../../services/you-are/you-are.service';

@Component({
  selector: 'mn-you-are',
  standalone: true,
  imports: [],
  templateUrl: './you-are.component.html',
  styleUrl: './you-are.component.css'
})
export class YouAreComponent implements YouAreComponentModel {
  get windowSize () {
    return this.windowService.width
  }
  get title () {
    return this.youAreService.title
  }
  get figureContent () {
    return this.youAreService.figureContent
  }

  constructor (
    private readonly windowService : WindowService ,
    private readonly youAreService : YouAreService
  ) {}
}
