import { ClientModel } from './client.model';

export class CompteModel {
    id!: string;
    numero!: string;
    solde!: number;
    client!: ClientModel;
    statut!: string;
    constructor(numero: string, solde: number, client: ClientModel, statut: string) {
        this.numero = numero;
        this.solde = solde;
        this.client = client;
        this.statut = statut;
    }
    creationCompte(this: CompteModel) {
        return this;
    }

    demandeSolde(this: CompteModel) {
        return "Solde : 1000 Fca";
    }
}   
