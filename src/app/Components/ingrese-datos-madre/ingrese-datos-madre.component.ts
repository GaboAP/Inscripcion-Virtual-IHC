import { Component } from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-ingrese-datos-madre',
  standalone: true,
  imports: [FormsModule, RouterLink,],
  templateUrl: './ingrese-datos-madre.component.html',
  styleUrl: './ingrese-datos-madre.component.css'
})
export class IngreseDatosMadreComponent {
datos={
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
      this.datos.ci !== 0 ||
      this.datos.apellidoPaterno !== '' ||
      this.datos.apellidoMaterno !== '' ||
      this.datos.nombres !== ''
    )
    {
    this.router.navigate(['reserve/select-school'])
    }
  }
}
