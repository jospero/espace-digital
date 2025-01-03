import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import {
  ParticleComponent,
} from './shared/components/particle-component/particle-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ParticleComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'espace-digital';
}
