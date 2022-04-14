import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  url: string = 'https://rickandmortyapi.com/api/location/';

  constructor(private http: HttpClient) { }

  getLocations() {
    return this.http.get(this.url);
  }
}
