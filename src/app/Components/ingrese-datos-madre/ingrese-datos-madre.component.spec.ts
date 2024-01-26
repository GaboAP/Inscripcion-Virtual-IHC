import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngreseDatosMadreComponent } from './ingrese-datos-madre.component';

describe('IngreseDatosMadreComponent', () => {
  let component: IngreseDatosMadreComponent;
  let fixture: ComponentFixture<IngreseDatosMadreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IngreseDatosMadreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IngreseDatosMadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
