import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Pilot } from '../shared/pilot.model'
import { PilotService } from '../shared/pilot.service';


@Component({
  selector: 'app-pilot-list',
  templateUrl: './pilot-list.component.html',
  styleUrls: ['./pilot-list.component.css'],
  providers: [PilotService]
})
export class PilotListComponent implements OnInit {

  public pilots: Pilot[];
  public pilot: Pilot = new Pilot();

  constructor(private router: Router, private pilotService: PilotService) { }

  ngOnInit() {
    this.pilotService.getAll().subscribe((data) => this.pilots = data);
  }

  create() {
    this.pilotService.create(this.pilot);
  }

  delete(id: string) {
    this.pilotService.delete(id);
    this.pilots = this.pilots.filter(i => { return i.id !== id; });
  }

  goToDetail(id: string) {
    this.router.navigate(['/pilots', id]);
  }
}
