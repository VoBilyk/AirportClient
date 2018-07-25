import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  public stewardess: Stewardess;

  constructor(private router: Router, private stewardessService: StewardessService) { }

  ngOnInit() {
    this.stewardesses = this.stewardessService.getAll();
  }

  create() {
    this.stewardessService.create(this.stewardess);
  }

  delete(id: string) {
    this.stewardessService.delete(id);
  }

  goToDetail(id: string) {
    this.router.navigate(['/stewardesses', id]);
  }
}
