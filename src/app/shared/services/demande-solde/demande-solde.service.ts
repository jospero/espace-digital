import { Injectable } from '@angular/core';

import { CompteModel } from '../../models/compte.model';

@Injectable({
  providedIn: 'root'
})
export class DemandeSoldeService {
  private compte: CompteModel;  
  constructor( private nouveauCompte: CompteModel ) { 
    this.compte = nouveauCompte;
  }

  getCompte() {
    return this.compte.demandeSolde();
  }

  demandeSolde() {
    return this.compte.demandeSolde();
  }
}
