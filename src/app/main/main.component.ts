import { Component } from '@angular/core';

import { TheDownComponent } from './the-down/the-down.component';
import { WellbeingComponent } from './wellbeing/wellbeing.component';
import { FrashOrganicProduceComponent } from './frash-organic-produce/frash-organic-produce.component';

@Component({
  selector: 'mn-main',
  standalone: true,
  imports: [TheDownComponent ,
            WellbeingComponent ,
            FrashOrganicProduceComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
