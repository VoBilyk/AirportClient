import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Pilot } from '../shared/pilot.model';
import { PilotService } from '../shared/pilot.service';


@Component({
  selector: 'app-pilot-detail',
  templateUrl: './pilot-detail.component.html',
  styleUrls: ['./pilot-detail.component.css']
})
export class PilotDetailComponent implements OnInit {

  pilot: Pilot = new Pilot();
  id: string;

  constructor(private pilotService: PilotService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.route.params.subscribe(params => this.id = params['id']);
    this.pilotService.get(this.id).subscribe(data => this.pilot = data);
  }

  update(id: string){
    this.pilotService.update(id, this.pilot);
    this.location.back();
  }

  delete(id: string) {
    this.pilotService.delete(id);
    this.location.back();
  }

}