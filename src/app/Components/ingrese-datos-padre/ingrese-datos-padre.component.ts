import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-ingrese-datos-padre',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink
  ],
  templateUrl: './ingrese-datos-padre.component.html',
  styleUrl: './ingrese-datos-padre.component.css'
})
export class IngreseDatosPadreComponent {
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
