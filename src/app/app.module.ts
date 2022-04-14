import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HomeComponent } from './componentes/home/home.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { CharactersComponent } from './componentes/characters/characters.component';
import { LocationsComponent } from './componentes/locations/locations.component';
import { EpisodesComponent } from './componentes/episodes/episodes.component';
import {PersonajeService} from "./services/personaje.service";
import {EpisodeService} from "./services/episode.service";
import {LocationService} from "./services/location.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    ContactoComponent,
    NavbarComponent,
    EpisodesComponent,
    CharactersComponent,
    LocationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PersonajeService, EpisodeService, LocationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
