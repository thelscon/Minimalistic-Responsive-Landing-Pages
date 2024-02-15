import { Component } from '@angular/core';

import { TheDownComponent } from './the-down/the-down.component';
import { WellbeingComponent } from './wellbeing/wellbeing.component';
import { FrashOrganicProduceComponent } from './frash-organic-produce/frash-organic-produce.component';
import { YouAreComponent } from './you-are/you-are.component';

@Component({
  selector: 'mn-main',
  standalone: true,
  imports: [TheDownComponent ,
            WellbeingComponent ,
            FrashOrganicProduceComponent ,
            YouAreComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
