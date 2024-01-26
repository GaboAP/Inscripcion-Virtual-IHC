import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-ingrese-datos-tutor',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink
  ],
  templateUrl: './ingrese-datos-tutor.component.html',
  styleUrl: './ingrese-datos-tutor.component.css'
})
export class IngreseDatosTutorComponent {
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
