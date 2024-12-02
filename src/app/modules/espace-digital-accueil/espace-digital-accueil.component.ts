import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { NgParticlesModule } from 'ng-particles';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-espace-digital-accueil',
  standalone: true,
  imports: [RouterLink, NgParticlesModule, ButtonModule],
  templateUrl: './espace-digital-accueil.component.html',
  styleUrl: './espace-digital-accueil.component.scss'
})
export class EspaceDigitalAccueilComponent {

}
