import { Component, OnInit } from '@angular/core';

import { Pilot} from './shared/pilot.model'
import { PilotService } from './shared/pilot.service';
import { Observable } from '../../../node_modules/rxjs';


@Component({
  selector: 'app-pilots',
  templateUrl: './pilots.component.html',
  styleUrls: ['./pilots.component.css'],
  providers: [PilotService]
})
export class PilotsComponent implements OnInit {
  
  public pilots: Observable<Pilot[]>;

  constructor(private pilotService: PilotService) { }

  ngOnInit() {
    this.pilots = this.pilotService.getAll();
  }

}
