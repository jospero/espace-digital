import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import {
  ParticleComponentComponent,
} from '../../shared/components/particle-component/particle-component.component';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [RouterOutlet, ParticleComponentComponent],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.scss'
})
export class AccueilComponent {

}
