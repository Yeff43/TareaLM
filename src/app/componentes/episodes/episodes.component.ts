import {Component, OnInit} from '@angular/core';
import {Episode} from "../../models/episode";
import {EpisodeService} from "../../services/episode.service";

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css']
})
export class EpisodesComponent implements OnInit {

  episodes: Episode[] = [];

  constructor(private episodeService: EpisodeService) { //Oojo con la estupidez de no poner los dos puntos OJO
  }

  ngOnInit(): void {
    this.getEpisode();
  }

  getEpisode(): void {
    this.episodeService.getEpisodios1().subscribe((jsonRespuesta:any) => this.episodes = jsonRespuesta.results);
  }
}

