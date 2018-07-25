import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Stewardess } from '../shared/stewardess.model';
import { StewardessService } from '../shared/stewardess.service';


@Component({
  selector: 'app-stewardess',
  templateUrl: './stewardess-detail.component.html',
  styleUrls: ['./stewardess-detail.component.css']
})
export class StewardessDetailComponent implements OnInit {

  stewardess: Stewardess = new Stewardess();
  id: string;

  constructor(private stewardessService: StewardessService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => this.id = params['id']);
    this.stewardessService.get(this.id).subscribe(data => this.stewardess = data);
  }

  update(id: string){
    this.stewardessService.update(id, this.stewardess);
  }

  delete(id: string) {
    this.stewardessService.delete(id);
  }

}
