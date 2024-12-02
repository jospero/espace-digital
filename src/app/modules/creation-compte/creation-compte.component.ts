import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { MenuModule } from 'primeng/menu';
import { StepperModule } from 'primeng/stepper';
import { ToggleButtonModule } from 'primeng/togglebutton';

import {
  BoutonRetourComponent,
} from '../../shared/components/bouton-retour/bouton-retour.component';
import { ClientModel } from '../../shared/models/client.model';
import {
  CreationCompteService,
} from '../../shared/services/creation-compte/creation-compte.service';

@Component({
  selector: 'app-creation-compte',
  standalone: true, 
  imports: [
    
    ButtonModule,
    StepperModule,
    InputTextModule,
    ToggleButtonModule,
    IconFieldModule,
    InputIconModule,
    CommonModule,
    InputNumberModule,
    FormsModule,
    MenuModule,
    BoutonRetourComponent 
  ],
  templateUrl: './creation-compte.component.html',
  styleUrl: './creation-compte.component.scss',
  providers: [
    CreationCompteService
  ] ,

})
export class CreationCompteComponent {
  active: number = 0;
  client: ClientModel = new ClientModel();
  creationCompteService: CreationCompteService = new CreationCompteService(this.client);

  creationCompte() {
    return this.creationCompteService.creationCompte();
  }
 

}
