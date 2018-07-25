import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Flight } from '../shared/flight.model'
import { FlightService } from '../shared/flight.service';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent implements OnInit {

  public flights: Observable<Flight[]>;
  public flight: Flight;

  constructor(private router: Router, private flightService: FlightService) { }

  ngOnInit() {
    this.flights = this.flightService.getAll();
  }

  create() {
    this.flightService.create(this.flight);
  }

  delete(id: string) {
    this.flightService.delete(id);
  }

  goToDetail(id: string) {
    this.router.navigate(['/flights', id]);
  }

}
