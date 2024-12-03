import {
  AfterViewInit,
  Component,
} from '@angular/core';
import {
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';

import {
  CommunicationComposantService,
} from '../../shared/services/communication-composant/communication-composant.service';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.scss'
})
  export class AccueilComponent implements AfterViewInit {
  constructor(private communicationComposantService: CommunicationComposantService) {}

  ngAfterViewInit() {
    this.communicationComposantService.notifyBLoaded();
  }
}
