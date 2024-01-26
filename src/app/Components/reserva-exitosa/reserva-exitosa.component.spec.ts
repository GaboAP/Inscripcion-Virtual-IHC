import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaExitosaComponent } from './reserva-exitosa.component';

describe('ReservaExitosaComponent', () => {
  let component: ReservaExitosaComponent;
  let fixture: ComponentFixture<ReservaExitosaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReservaExitosaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReservaExitosaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
