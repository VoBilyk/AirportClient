import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Aeroplane } from '../shared/aeroplane.model';
import { AeroplaneService } from '../shared/aeroplane.service';

@Component({
  selector: 'app-aeroplane-list',
  templateUrl: './aeroplane-list.component.html',
  styleUrls: ['./aeroplane-list.component.css']
})
export class AeroplaneListComponent implements OnInit {

  public aeroplanes: Observable<Aeroplane[]>;
  public aeroplane: Aeroplane;

  constructor(private router: Router, private aeroplaneService: AeroplaneService) { }

  ngOnInit() {
    this.aeroplanes = this.aeroplaneService.getAll();
  }

  create() {
    this.aeroplaneService.create(this.aeroplane);
  }

  delete(id: string) {
    this.aeroplaneService.delete(id);
  }

  goToDetail(id: string) {
    this.router.navigate(['/aeroplanes', id]);
  }

}
