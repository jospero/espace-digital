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
  selector: 'app-creation-compte',
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
  templateUrl: './creation-compte.component.html',
  styleUrl: './creation-compte.component.scss'
})
export class CreationCompteComponent {
  items: MenuItem[] = [];
  subscription: Subscription = new Subscription();
  active: number = 0;

  ngOnInit(): void {
    this.items = [
      { label: 'Informations personnelles', routerLink: 'personal-information' },
      { label: 'Documents', routerLink: 'documents' },
      { label: 'Confirmation', routerLink: 'confirmation' },  
    ];
  }

  nextCallback() {
    this.active++;
  } 
}
