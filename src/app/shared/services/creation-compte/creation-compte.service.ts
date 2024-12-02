import { Injectable } from '@angular/core';

import { ClientModel } from '../../models/client.model';

@Injectable({
  providedIn: 'root'
})
export class CreationCompteService {

   client: ClientModel;

  constructor( nouveauClient : ClientModel ) { 
    this.client = nouveauClient;
  }

  creationCompte() {
    return this.client.creationClient();
  }
}
