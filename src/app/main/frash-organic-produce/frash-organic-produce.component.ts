import { Component } from '@angular/core';

import { FrashOrganicProduceComponentModel } from './frash-organic-produce.component.model';
import { FrashOrganicProduceService } from '../../services/frash-organic-produce/frash-organic-produce.service';

@Component({
  selector: 'mn-frash-organic-produce',
  standalone: true,
  imports: [],
  templateUrl: './frash-organic-produce.component.html',
  styleUrl: './frash-organic-produce.component.css'
})
export class FrashOrganicProduceComponent implements FrashOrganicProduceComponentModel {
  get title () {
    return this.frashOrganicProduceService.title
  }
  get content () {
    return this.frashOrganicProduceService.content
  }
  get listContent () {
    return this.frashOrganicProduceService.listContent
  }
  get pathToImage () {
    return this.frashOrganicProduceService.pathToImage
  }

  constructor (
    private readonly frashOrganicProduceService : FrashOrganicProduceService
  ) {}
}
