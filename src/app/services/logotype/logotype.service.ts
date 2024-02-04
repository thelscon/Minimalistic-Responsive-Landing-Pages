import { Injectable } from "@angular/core";

import { LogotypeServiceModel } from "./logotype.model";

@Injectable({
  providedIn: 'root'
})
export class LogotypeService implements LogotypeServiceModel {
  image = '../../../assets/images/logotype.svg'
  text = 'Logo'
}
