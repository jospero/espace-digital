import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeSoldeComponent } from './demande-solde.component';

describe('DemandeSoldeComponent', () => {
  let component: DemandeSoldeComponent;
  let fixture: ComponentFixture<DemandeSoldeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemandeSoldeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemandeSoldeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
