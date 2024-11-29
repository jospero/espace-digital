import { Routes } from '@angular/router';

import { AccueilComponent } from './models/accueil/accueil.component';

export const routes: Routes = [
    {
        path: '',
        component: AccueilComponent, children : [
            {
                path: '',
                loadChildren: () => import('./models/accueil/accueil.route').then(m => m.routes)
            }
        ]
        
    }
];
