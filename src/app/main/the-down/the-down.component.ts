import { Component } from '@angular/core';

import { TheDownService } from '../../services/the-down/the-down.service';

@Component({
  selector: 'mn-the-down',
  standalone: true,
  imports: [],
  templateUrl: './the-down.component.html',
  styleUrl: './the-down.component.css'
})
export class TheDownComponent {
  constructor (
    readonly theDownService : TheDownService
  ) {}
}
