import { Injectable } from '@angular/core';

import { WindowServiceModel } from './window.service.model';
import { fromEvent } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WindowService implements WindowServiceModel {
  width = window.innerWidth
  readonly resize = fromEvent (window , 'resize')

  constructor () {
    this.resize.subscribe (()=> {
      this.width = window.innerWidth
    })
  }
}
