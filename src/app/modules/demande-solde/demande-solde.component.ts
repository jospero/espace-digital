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
import { StepsModule } from 'primeng/steps';
import { ToggleButtonModule } from 'primeng/togglebutton';

import {
  BoutonRetourComponent,
} from '../../shared/components/bouton-retour/bouton-retour.component';
import { ClientModel } from '../../shared/models/client.model';
import { CompteModel } from '../../shared/models/compte.model';
import {
  DemandeSoldeService,
} from '../../shared/services/demande-solde/demande-solde.service';

@Component({
  selector: 'app-demande-solde',
  standalone: true,
  imports: [
    StepsModule,
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
  templateUrl: './demande-solde.component.html',
  styleUrl: './demande-solde.component.scss',
  providers: [
    DemandeSoldeService
  ]
})
export class DemandeSoldeComponent {
  
  active: number = 0;
  telephone!: string;
  codeOtp!: string;
  showValidationErrors = false;
  client: ClientModel = new ClientModel();
  compte: CompteModel = new CompteModel(
  "1234567890",
  1000,
  new ClientModel(),
  "Actif"
  );
  demandeSoldeService: DemandeSoldeService = new DemandeSoldeService(this.compte);

  demandeSolde() {
    return this.demandeSoldeService.demandeSolde();
  }

  validateStep1(nextCallback: any): void {
    this.showValidationErrors = true;
    if (this.telephone) {
      this.showValidationErrors = false;
      nextCallback.emit();
    }
  } 

  validateStep2(nextCallback: any): void {
    this.showValidationErrors = true;
    if (this.codeOtp) {
      this.showValidationErrors = false;
      nextCallback.emit();
    }
  }
}
