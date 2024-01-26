import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngreseDatosTutorComponent } from './ingrese-datos-tutor.component';

describe('IngreseDatosTutorComponent', () => {
  let component: IngreseDatosTutorComponent;
  let fixture: ComponentFixture<IngreseDatosTutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IngreseDatosTutorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IngreseDatosTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
