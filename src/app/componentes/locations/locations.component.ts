import { Component, OnInit } from '@angular/core';
import {Location} from "../../models/location";
import {LocationService} from "../../services/location.service";

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {

  locations: Location[] = [];

  constructor(private locationsService: LocationService) { }

  ngOnInit(): void {
    this.getLocations();
  }

  getLocations() {
    this.locationsService.getLocations().subscribe((jsonRespuesta:any) => {this.locations = jsonRespuesta.results});
  }
}
