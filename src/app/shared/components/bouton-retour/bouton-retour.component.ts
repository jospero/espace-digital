import {
  Component,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-bouton-retour',
  standalone: true,
  imports: [],
  templateUrl: './bouton-retour.component.html',
  styleUrls: ['./bouton-retour.component.scss']
})
export class BoutonRetourComponent {
  @Output() prevCallback = new EventEmitter<void>();
}
