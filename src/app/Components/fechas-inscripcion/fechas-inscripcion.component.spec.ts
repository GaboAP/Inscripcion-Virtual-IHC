import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FechasInscripcionComponent } from './fechas-inscripcion.component';

describe('FechasInscripcionComponent', () => {
  let component: FechasInscripcionComponent;
  let fixture: ComponentFixture<FechasInscripcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FechasInscripcionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FechasInscripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
