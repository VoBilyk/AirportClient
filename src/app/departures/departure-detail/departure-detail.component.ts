import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Departure } from '../shared/departure.model';
import { DepartureService } from '../shared/departure.service';

@Component({
  selector: 'app-departure-detail',
  templateUrl: './departure-detail.component.html',
  styleUrls: ['./departure-detail.component.css']
})
export class DepartureDetailComponent implements OnInit {

  departure: Departure = new Departure();
  id: string;

  constructor(private departureService: DepartureService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.route.params.subscribe(params => this.id = params['id']);
    this.departureService.get(this.id).subscribe(data => this.departure = data);
  }

  update(id: string){
    this.departureService.update(id, this.departure);
    this.location.back();
  }

  delete(id: string) {
    this.departureService.delete(id);
    this.location.back();
  }

}
