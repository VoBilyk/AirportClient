import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Crew } from '../shared/crew.model';
import { CrewService } from '../shared/crew.service';


@Component({
  selector: 'app-crew-detail',
  templateUrl: './crew-detail.component.html',
  styleUrls: ['./crew-detail.component.css']
})
export class CrewDetailComponent implements OnInit {

  crew: Crew = new Crew();
  stewardessId: string ='';
  id: string;
  @Input('master') masterName: string;

  constructor(
    private crewService: CrewService, 
    private route: ActivatedRoute,  
    private location: Location) { }

  ngOnInit() {
    this.route.params.subscribe(params => this.id = params['id']);
    this.crewService.get(this.id).subscribe(data => this.crew = data);
  }

  update(id: string){
    this.crewService.update(id, this.crew);
  }

  delete(id: string) {
    this.crewService.delete(id);
    this.location.back();
  }

  addStewardess(){
    this.crew.stewardessesId.push(this.stewardessId);
    this.stewardessId = '';
  }

  removeStewardess(i: number){
    this.crew.stewardessesId.splice(i, 1);
  }

}
