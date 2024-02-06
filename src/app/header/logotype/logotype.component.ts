import { Component } from '@angular/core';

import { LogotypeComponentModel } from './logotype.component.model';
import { LogotypeService } from "../../services/logotype/logotype.service"

@Component({
  selector: 'mn-logotype',
  standalone: true,
  imports: [],
  templateUrl: './logotype.component.html',
  styleUrl: './logotype.component.css'
})
export class LogotypeComponent implements LogotypeComponentModel {

  constructor (
    readonly logotypeService : LogotypeService
  ) {}
}
