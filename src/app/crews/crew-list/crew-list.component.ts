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

  public crews: Observable<Crew[]>;
  public crew: Crew = new Crew();

  constructor(private router: Router, private crewService: CrewService) { }

  ngOnInit() {
    this.crews = this.crewService.getAll();
  }

  create() {
    this.crewService.create(this.crew);
  }

  delete(id: string) {
    this.crewService.delete(id);
  }

  goToDetail(id: string) {
    this.router.navigate(['/crews', id]);
  }

}
