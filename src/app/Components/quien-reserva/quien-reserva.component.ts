import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-quien-reserva',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './quien-reserva.component.html',
  styleUrl: './quien-reserva.component.css'
})
export class QuienReservaComponent {
  seleccion:string = 'Seleccione una opción'
  active:boolean=false;
  constructor(private router:Router) {
  }
  updateSeleccion(Texto:string){
    this.seleccion=Texto;
    this.active=true;
  }
  navegar(){
    switch (this.seleccion){
      case "Mamá":
        this.router.navigate(["reserve/fill-mother"]);
        break;
      case "Papá":
        this.router.navigate(["reserve/fill-father"]);
        break;
      case "Mamá y Papá":
        this.router.navigate(["reserve/fill-mother-and-father"]);
        break;
      case "Tutor":
        this.router.navigate(["reserve/fill-tutor"]);
        break;
    }
  }
}
