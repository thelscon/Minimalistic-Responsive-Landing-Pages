import { Component } from '@angular/core';

import { TheDawnComponent } from './the-dawn/the-dawn.component';
import { WellbeingComponent } from './wellbeing/wellbeing.component';
import { FrashOrganicProduceComponent } from './frash-organic-produce/frash-organic-produce.component';
import { YouAreComponent } from './you-are/you-are.component';
import { StartsComponent } from './starts/starts.component';

@Component({
  selector: 'mn-main',
  standalone: true,
  imports: [TheDawnComponent ,
            WellbeingComponent ,
            FrashOrganicProduceComponent ,
            YouAreComponent ,
            StartsComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
