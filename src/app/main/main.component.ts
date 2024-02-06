import { Component } from '@angular/core';

import { TheDownComponent } from './the-down/the-down.component';

@Component({
  selector: 'mn-main',
  standalone: true,
  imports: [TheDownComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
