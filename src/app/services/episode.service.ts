import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {

  url: string = 'https://rickandmortyapi.com/api/episode';

  constructor(private http: HttpClient) {
  }

  getEpisodios1() { // getEpisodios()
    return this.http.get(this.url);
  }
}
