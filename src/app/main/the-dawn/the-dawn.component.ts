import { Component } from '@angular/core';

import { TheDawnService } from '../../services/the-dawn/the-dawn.service';

@Component({
  selector: 'mn-the-dawn',
  standalone: true,
  imports: [],
  templateUrl: './the-dawn.component.html',
  styleUrl: './the-dawn.component.css'
})
export class TheDawnComponent {
  get title () {
    return this.theDawnService.title
  }
  get content () {
    return this.theDawnService.content
  }
  get buttonText () {
    return this.theDawnService.buttonText
  }
  get pathToFirstImage () {
    return this.theDawnService.pathToFirstImage
  }
  get pathToSecondImage () {
    return this.theDawnService.pathToSecondImage
  }

  constructor (
    private readonly theDawnService : TheDawnService
  ) {}
}
