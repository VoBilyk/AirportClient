import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Crew } from '../shared/crew.model';
import { CrewService } from '../shared/crew.service';

@Component({
  selector: 'app-crew-list',
  templateUrl: './crew-list.component.html',
  styleUrls: ['./crew-list.component.css']
})
export class CrewListComponent implements OnInit {

  public crews: Crew[];
  public crew: Crew = new Crew();
  public stewardessId = '';

  constructor(private router: Router, private crewService: CrewService) { }

  ngOnInit() {
    this.crew.stewardessesId = [];
    this.crewService.getAll().subscribe((data) => this.crews = data);
  }

  create() {
    this.crewService.create(this.crew);
  }

  delete(id: string) {
    this.crewService.delete(id);
    this.crews = this.crews.filter(i => { return i.id !== id; });
  }

  goToDetail(id: string) {
    this.router.navigate(['/crews', id]);
  }

  pushStewardess(){
    this.crew.stewardessesId.push(this.stewardessId);
    this.stewardessId = '';
  }

}
