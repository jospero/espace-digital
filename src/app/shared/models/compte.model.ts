import { ClientModel } from './client.model';

export class CompteModel {
    id!: string;
    numero!: string;
    solde!: number;
    client!: ClientModel;
    creationCompte(this: CompteModel) {
        return this;
    }

    demandeSolde(this: CompteModel) {
        return "Solde : 1000 Fca";
    }
}   
