import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { KeyFilterModule } from 'primeng/keyfilter';
import { MenuModule } from 'primeng/menu';
import { StepperModule } from 'primeng/stepper';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { DialogModule } from 'primeng/dialog';

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
    BoutonRetourComponent,
    InputNumberModule ,
    KeyFilterModule,
    ReactiveFormsModule,
    DialogModule,
    
    
  ],
  templateUrl: './creation-compte.component.html',
  styleUrl: './creation-compte.component.scss',
  providers: [
    CreationCompteService
  ] ,
})
export class CreationCompteComponent {
  visible: boolean = false;
  active: number = 0;
  client: ClientModel = new ClientModel();
  showValidationErrors = false;
  creationCompteService: CreationCompteService = new CreationCompteService(this.client);

  creationCompte() {
    return this.creationCompteService.creationCompte();
  }

  validateStep1(nextCallback: any): void {
    this.showValidationErrors = true;
    if (this.client.nom && this.client.prenom && this.client.telephone && this.client.email) {
        this.showValidationErrors = false;
        nextCallback.emit();
    } 
}

validateStep2(nextCallback: any): void {
  this.showValidationErrors = true;
  if (this.client.profession && this.client.entreprise && this.client.revenuMensuel && this.client.secteurActivite) {
      this.showValidationErrors = false;
      nextCallback.emit();
  }

  
}

showDialog() {
  this.visible = true;
}
 
 
}
