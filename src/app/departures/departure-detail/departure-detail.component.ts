import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private departureService: DepartureService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => this.id = params['id']);
    this.departureService.get(this.id).subscribe(data => this.departure = data);
  }

  update(id: string){
    this.departureService.update(id, this.departure);
  }

  delete(id: string) {
    this.departureService.delete(id);
  }

}
