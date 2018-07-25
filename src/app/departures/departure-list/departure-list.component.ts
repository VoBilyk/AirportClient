import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Departure } from '../shared/departure.model';
import { DepartureService } from '../shared/departure.service';


@Component({
  selector: 'app-departure-list',
  templateUrl: './departure-list.component.html',
  styleUrls: ['./departure-list.component.css']
})
export class DepartureListComponent implements OnInit {

  public departures: Observable<Departure[]>;
  public departure: Departure;

  constructor(private router: Router, private departureService: DepartureService) { }

  ngOnInit() {
    this.departures = this.departureService.getAll();
  }

  create() {
    this.departureService.create(this.departure);
  }

  delete(id: string) {
    this.departureService.delete(id);
  }

  goToDetail(id: string) {
    this.router.navigate(['/departures', id]);
  }
}
