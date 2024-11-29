import { Routes } from '@angular/router';

import {
  CreationCompteComponent,
} from '../creation-compte/creation-compte.component';
import {
  DemandeSoldeComponent,
} from '../demande-solde/demande-solde.component';
import {
  EspaceDigitalAccueilComponent,
} from '../espace-digital-accueil/espace-digital-accueil.component';

export const routes: Routes = [
    {
        path: '',
        component: EspaceDigitalAccueilComponent
    },
   
    {
        path: 'creation-compte',
        component: CreationCompteComponent
    },
    {
        path: 'demande-solde',
        component: DemandeSoldeComponent
    }
];
