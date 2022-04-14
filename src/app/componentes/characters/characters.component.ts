import { Component, OnInit } from '@angular/core';
import {Personaje} from "../../models/personaje";
import {PersonajeService} from "../../services/personaje.service";

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  personajes: Personaje[] = [];

  constructor(private personajeService: PersonajeService) { }

  ngOnInit(): void {
    this.getPersonajes();
  }

    getPersonajes(): void {
    this.personajeService.getPersonajes().subscribe((jsonRespuesta:any) => this.personajes = jsonRespuesta.results as Personaje[]
      );
  }
}
