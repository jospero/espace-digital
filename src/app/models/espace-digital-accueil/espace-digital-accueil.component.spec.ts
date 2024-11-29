import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaceDigitalAccueilComponent } from './espace-digital-accueil.component';

describe('EspaceDigitalAccueilComponent', () => {
  let component: EspaceDigitalAccueilComponent;
  let fixture: ComponentFixture<EspaceDigitalAccueilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EspaceDigitalAccueilComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EspaceDigitalAccueilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
