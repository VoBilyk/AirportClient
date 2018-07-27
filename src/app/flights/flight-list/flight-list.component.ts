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

  public flights: Flight[];
  public flight: Flight = new Flight();

  constructor(private router: Router, private flightService: FlightService) { }

  ngOnInit() {
    this.flightService.getAll().subscribe(data => this.flights = data);
  }

  create() {
    this.flightService.create(this.flight);
  }

  delete(id: string) {
    this.flightService.delete(id);
    this.flights = this.flights.filter(i => { return i.id !== id; });
  }

  goToDetail(id: string) {
    this.router.navigate(['/flights', id]);
  }

}
