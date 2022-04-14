import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PersonajeService {

  url: string = 'https://rickandmortyapi.com/api/character/';

  constructor(private http: HttpClient) {
  }

  getPersonajes() {
    return this.http.get(this.url);
  }
}

