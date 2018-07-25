import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Pilot } from '../shared/pilot.model'
import { PilotService } from '../shared/pilot.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-pilot-list',
  templateUrl: './pilot-list.component.html',
  styleUrls: ['./pilot-list.component.css'],
  providers: [PilotService]
})
export class PilotListComponent implements OnInit {

  public pilots: Observable<Pilot[]>;

  constructor(private router: Router, private pilotService: PilotService) { }

  ngOnInit() {
    this.pilots = this.pilotService.getAll();
  }

  delete(id: string) {
    this.pilotService.delete(id);
  }

  goToDetail(id: string) {
    this.router.navigate(['/pilot-detail', id]);
  }
}
