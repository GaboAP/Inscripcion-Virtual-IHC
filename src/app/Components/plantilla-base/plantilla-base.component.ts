import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-plantilla-base',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './plantilla-base.component.html',
  styleUrl: './plantilla-base.component.css'
})
export class PlantillaBaseComponent {

}
