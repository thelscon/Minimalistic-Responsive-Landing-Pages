import { Injectable } from "@angular/core";

import { LogotypeEnum } from "./logotype.service.model";
import { LogotypeServiceModel } from "./logotype.service.model";

@Injectable({
  providedIn: 'root'
})
export class LogotypeService implements LogotypeServiceModel {
  readonly name = LogotypeEnum.Name
}
