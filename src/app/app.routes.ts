import { Routes } from '@angular/router';

import { AccueilComponent } from './modules/accueil/accueil.component';

export const routes: Routes = [
    {
        path: '',
        component: AccueilComponent, children : [
            {
                path: '',
                loadChildren: () => import('./modules/accueil/accueil.route').then(m => m.routes)
            }
        ]
        
    }
];
