import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Flight } from '../shared/flight.model'
import { FlightService } from '../shared/flight.service';

@Component({
  selector: 'app-flight-detail',
  templateUrl: './flight-detail.component.html',
  styleUrls: ['./flight-detail.component.css']
})
export class FlightDetailComponent implements OnInit {

  flight: Flight = new Flight();
  id: string;

  constructor(private flightService: FlightService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.flight.ticketsId = [];
    this.route.params.subscribe(params => this.id = params['id']);
    this.flightService.get(this.id).subscribe(data => this.flight = data);
  }

  update(id: string){
    this.flightService.update(id, this.flight);
    this.location.back();
  }

  delete(id: string) {
    this.flightService.delete(id);
    this.location.back();
  }

}
