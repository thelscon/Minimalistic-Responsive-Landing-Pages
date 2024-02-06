import { Injectable } from "@angular/core";

import { LogotypeServiceModel } from "./logotype.service.model";

@Injectable({
  providedIn: 'root'
})
export class LogotypeService implements LogotypeServiceModel {
  readonly pathToImage = '../../../assets/images/logotype.svg'
  readonly name = 'Logo'
}
