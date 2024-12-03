import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationComposantService {

  constructor() { }

  private bLoadedSource = new BehaviorSubject<boolean>(false);
  bLoaded$ = this.bLoadedSource.asObservable();

  notifyBLoaded(): void {
    
    this.bLoadedSource.next(true);
  }
}
