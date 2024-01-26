import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {PlantillaBaseComponent} from "./Components/plantilla-base/plantilla-base.component";
import {InicioComponent} from "./Components/inicio/inicio.component";
import {QuienReservaComponent} from "./Components/quien-reserva/quien-reserva.component";
import {ReservaExitosaComponent} from "./Components/reserva-exitosa/reserva-exitosa.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink,RouterLinkActive, RouterOutlet, PlantillaBaseComponent,InicioComponent,QuienReservaComponent,ReservaExitosaComponent,InicioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'inscripcion-virtual';
}
