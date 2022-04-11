import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Persona} from "../../models/persona";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //Aqui declaramos nuestras variables
  personas: Persona [] = [];

  //El constructor se utiliza para inyectar dependencias necesarias
  constructor(private router: Router) {
    // Es para inicializar variables Basicas
  }

  //El ngOnInit hará la lógica necesaria antes de mostrar el HTML
  ngOnInit(): void {
    this.rellenarPersonas();
  }

  // AQUI Crearemos los metodos que necesitemos, si queremos que sean
  // accesibles desde el html tienen que ser public
  rellenarPersonas(): void {
    this.personas.push(
      {nombre: 'pepe',apellidos:'fernandez', edad: 80, trabajo: 'jubilado', esMayor:true},
      {nombre: 'pepe',apellidos:'fernandez', edad: 80, trabajo: 'jubilado', esMayor:true},
      {nombre: 'pepe',apellidos:'fernandez', edad: 80, trabajo: 'jubilado', esMayor:true},
      {nombre: 'pepe',apellidos:'fernandez', edad: 80, trabajo: 'jubilado', esMayor:true},
      {nombre: 'pepe',apellidos:'fernandez', edad: 80, trabajo: 'jubilado', esMayor:true},
      {nombre: 'pepe',apellidos:'fernandez', edad: 80, trabajo: 'jubilado', esMayor:true},
      {nombre: 'pepe',apellidos:'fernandez', edad: 80, trabajo: 'jubilado', esMayor:true},
      {nombre: 'pepe',apellidos:'fernandez', edad: 80, trabajo: 'jubilado', esMayor:true},
      {nombre: 'pepe',apellidos:'fernandez', edad: 80, trabajo: 'jubilado', esMayor:true}
    );
  }

}
