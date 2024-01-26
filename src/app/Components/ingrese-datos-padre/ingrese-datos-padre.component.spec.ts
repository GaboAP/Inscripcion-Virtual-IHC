import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngreseDatosPadreComponent } from './ingrese-datos-padre.component';

describe('IngreseDatosPadreComponent', () => {
  let component: IngreseDatosPadreComponent;
  let fixture: ComponentFixture<IngreseDatosPadreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IngreseDatosPadreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IngreseDatosPadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
