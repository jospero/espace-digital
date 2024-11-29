import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { MenuModule } from 'primeng/menu';
import { StepperModule } from 'primeng/stepper';
import { StepsModule } from 'primeng/steps';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { Subscription } from 'rxjs';

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
    MenuModule

  ],
  templateUrl: './demande-solde.component.html',
  styleUrl: './demande-solde.component.scss'
})
export class DemandeSoldeComponent {
  items: MenuItem[] = [];
  subscription: Subscription = new Subscription();
  active: number = 0;

  ngOnInit(): void {
    this.items = [
      { label: 'Numero de telephone', routerLink: 'numero-telephone' },
      { label: 'Code de verification', routerLink: 'code-verification' },
      { label: 'Solde', routerLink: 'solde' },  
    ];
  }

  nextCallback() {
    this.active++;
  }
}
