import {RouterModule, Routes} from '@angular/router';
import {NgModule} from "@angular/core";
import {InicioComponent} from "./Components/inicio/inicio.component";
import {ReservaExitosaComponent} from "./Components/reserva-exitosa/reserva-exitosa.component";
import {QuienReservaComponent} from "./Components/quien-reserva/quien-reserva.component";
import {IngreseDatosMadreComponent} from "./Components/ingrese-datos-madre/ingrese-datos-madre.component";
import {IngreseDatosPadreComponent} from "./Components/ingrese-datos-padre/ingrese-datos-padre.component";
import {IngreseDatosTutorComponent} from "./Components/ingrese-datos-tutor/ingrese-datos-tutor.component";
import {
  IngreseDatosPadreYMadreComponent
} from "./Components/ingrese-datos-padre-ymadre/ingrese-datos-padre-ymadre.component";
import {SelectColegioComponent} from "./Components/select-colegio/select-colegio.component";

export const routes: Routes = [
  {
    path:"",
    component: InicioComponent
  },
  {
    path:"success",
    component: ReservaExitosaComponent
  },
  {
    path:"reserve/who",
    component: QuienReservaComponent
  },
  {
    path:"reserve/fill-mother",
    component:IngreseDatosMadreComponent
  },
  {
    path:"reserve/fill-father",
    component:IngreseDatosPadreComponent
  },
  {
    path:"reserve/fill-tutor",
    component:IngreseDatosTutorComponent
  },
  {
    path:"reserve/fill-mother-and-father",
    component:IngreseDatosPadreYMadreComponent
  },
  {
    path:"reserve/select-school",
    component:SelectColegioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
