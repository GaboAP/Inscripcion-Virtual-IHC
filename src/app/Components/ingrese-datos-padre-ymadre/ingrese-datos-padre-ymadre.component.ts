import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-ingrese-datos-padre-ymadre',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink
  ],
  templateUrl: './ingrese-datos-padre-ymadre.component.html',
  styleUrl: './ingrese-datos-padre-ymadre.component.css'
})
export class IngreseDatosPadreYMadreComponent {
  datos={
    ci:0,
    apellidoPaterno:'',
    apellidoMaterno:'',
    nombres:''
  }
  datosPadre={
    ci:0,
    apellidoPaterno:'',
    apellidoMaterno:'',
    nombres:''
  }
  constructor(private router:Router) {
  }
  saveMother(){
    console.log(this.datos)
    if (
      this.datos.ci !== 0 &&
      this.datos.apellidoPaterno !== '' &&
      this.datos.apellidoMaterno !== '' &&
      this.datos.nombres !== '' &&
      this.datosPadre.ci !== 0 &&
      this.datosPadre.apellidoPaterno !== '' &&
      this.datosPadre.apellidoMaterno !== '' &&
      this.datosPadre.nombres !== ''
    )
    {
      this.router.navigate(['reserve/select-school'])
    }
  }
}
