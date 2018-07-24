import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Stewardess } from '../shared/stewardess.model'
import { StewardessService } from '../shared/stewardess.service'


@Component({
  selector: 'app-stewardess-list',
  templateUrl: './stewardess-list.component.html',
  styleUrls: ['./stewardess-list.component.css'],
  providers: [StewardessService]
})
export class StewardessListComponent implements OnInit {

  public stewardesses: Observable<Stewardess[]>;

  constructor(private stewardessService: StewardessService) { }

  ngOnInit() {
    this.stewardesses = this.stewardessService.getAll();
  }

}
