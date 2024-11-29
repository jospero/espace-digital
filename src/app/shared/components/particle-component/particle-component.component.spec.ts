import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticleComponentComponent } from './particle-component.component';

describe('ParticleComponentComponent', () => {
  let component: ParticleComponentComponent;
  let fixture: ComponentFixture<ParticleComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParticleComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParticleComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
