import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutonRetourComponent } from './bouton-retour.component';

describe('BoutonRetourComponent', () => {
  let component: BoutonRetourComponent;
  let fixture: ComponentFixture<BoutonRetourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoutonRetourComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoutonRetourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
