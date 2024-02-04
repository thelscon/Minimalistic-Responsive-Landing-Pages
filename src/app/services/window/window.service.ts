import { Injectable } from '@angular/core';

import { WindowServiceModel } from './window.model';
import { fromEvent } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WindowService implements WindowServiceModel {
  readonly resize = fromEvent (window , 'resize')
}
