import { Component, OnInit } from '@angular/core';
import {Persona} from "../../models/persona";

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  //Databinding, enlazar el ts con el html
    //Variables
    persona: Persona = {
      nombre: 'Pepe',
      apellidos: 'Martinez',
      edad: 34,
      trabajo: 'Camionero',
      esMayor: true
    }

    prueba = 'Hola soy un String';
    numero = 258;

  constructor() { }

  ngOnInit(): void {
  }

  dameNombre(): string {
    return 'Manolo';
  }

  cambiaNombre(): void {
    this.persona.nombre = 'Yeffry';
  }
}
