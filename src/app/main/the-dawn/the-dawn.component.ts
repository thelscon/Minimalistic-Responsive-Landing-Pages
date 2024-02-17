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
  constructor (
    readonly theDawnService : TheDawnService
  ) {}
}
