import {
  Component,
  OnInit,
} from '@angular/core';

import { NgParticlesModule } from 'ng-particles';
import { loadFull } from 'tsparticles';
import {
  ClickMode,
  Engine,
  HoverMode,
  MoveDirection,
  OutMode,
} from 'tsparticles-engine';

import {
  CommunicationComposantService,
} from '../../services/communication-composant/communication-composant.service';

@Component({
  selector: 'app-particle-composant',
  standalone: true,
  template: `
    <ng-particles
      [id]="id"
      [options]="particlesOptions"
      [particlesInit]="particlesInit"
      class="particles-container"
    ></ng-particles>
  `,
  imports: [NgParticlesModule],
  styles: [`
    :host {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -2;
    }
    .particles-container {
      position: absolute;
      width: 100%;
      height: 100%;
    }
  `]
})
export class ParticleComponent implements OnInit {
  id = "tsparticles-deux";
  engine: Engine | undefined;
  particlesOptions = {
    background: {
      color: {
        value: "#ffff",
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: false,
          mode: ClickMode.push,
        },
        onHover: {
          enable: true,
          mode: HoverMode.repulse,
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 100,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#AD9961",
      },
      links: {
        color: "#AD9961",
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      move: {
        direction: MoveDirection.none,
        enable: true,
        outModes: {
          default: OutMode.bounce,
        },
        random: false,
        speed: 3,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 80,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  };

  constructor( private communicationComposantService: CommunicationComposantService) { }

  ngOnInit() { 
    this.communicationComposantService.bLoaded$.subscribe((bLoaded) => {
      if(bLoaded) {
        this.reloadParticles();
      }
    });
  }
  
  reloadParticles() {
   if(this.engine) {
      
      this.engine.refresh();
    }
  }

  async particlesInit(engine: Engine): Promise<void> {
    await loadFull(engine);
  }
}