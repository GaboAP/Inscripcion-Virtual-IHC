import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngreseDatosPadreYMadreComponent } from './ingrese-datos-padre-ymadre.component';

describe('IngreseDatosPadreYMadreComponent', () => {
  let component: IngreseDatosPadreYMadreComponent;
  let fixture: ComponentFixture<IngreseDatosPadreYMadreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IngreseDatosPadreYMadreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IngreseDatosPadreYMadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
