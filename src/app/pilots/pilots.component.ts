import { Component, OnInit } from '@angular/core';
import { Pilot} from './shared/pilot.model'
import { PilotService } from './shared/pilot.service';


@Component({
  selector: 'app-pilots',
  templateUrl: './pilots.component.html',
  styleUrls: ['./pilots.component.css'],
  providers: [PilotService]
})
export class PilotsComponent implements OnInit {

  constructor(private pilotService: PilotService) { }

  ngOnInit() {
  }

}
