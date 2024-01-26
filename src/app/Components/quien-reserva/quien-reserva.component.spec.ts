import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuienReservaComponent } from './quien-reserva.component';

describe('QuienReservaComponent', () => {
  let component: QuienReservaComponent;
  let fixture: ComponentFixture<QuienReservaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuienReservaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuienReservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
