import { Component } from '@angular/core';

import { TheDownComponent } from './the-down/the-down.component';
import { WellbeingComponent } from './wellbeing/wellbeing.component';

@Component({
  selector: 'mn-main',
  standalone: true,
  imports: [TheDownComponent , WellbeingComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
