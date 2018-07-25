import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private flightService: FlightService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => this.id = params['id']);
    this.flightService.get(this.id).subscribe(data => this.flight = data);
  }

  update(id: string){
    this.flightService.update(id, this.flight);
  }

  delete(id: string) {
    this.flightService.delete(id);
  }

}
