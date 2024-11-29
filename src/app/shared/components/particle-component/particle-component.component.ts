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

@Component({
  selector: 'app-particle-component',
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
      z-index: -1;
    }
    .particles-container {
      position: absolute;
      width: 100%;
      height: 100%;
    }
  `]
})
export class ParticleComponentComponent implements OnInit {
  id = "tsparticles";
 
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
          enable: true,
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
        speed: 3  ,
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

  constructor() { }

  ngOnInit() { }

  async particlesInit(engine: Engine): Promise<void> {
    await loadFull(engine);
  }
}


