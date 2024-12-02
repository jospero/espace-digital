export class ClientModel {
    id!: string;
    nom!: string;
    prenom!: string;
    email!: string;
    telephone!: string;  
    profession!: string;
    entreprise!: string;
    revenuMensuel!: string;
    secteurActivite!: string;
   creationClient(this: ClientModel) {
    return this;
   }

}       
