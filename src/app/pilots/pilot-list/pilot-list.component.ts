import { Component, OnInit } from '@angular/core';

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

  constructor(private pilotService: PilotService) { }

  ngOnInit() {
    this.pilots = this.pilotService.getAll();
  }

  delete(id: string) {
    this.pilotService.delete(id);
  }

}
