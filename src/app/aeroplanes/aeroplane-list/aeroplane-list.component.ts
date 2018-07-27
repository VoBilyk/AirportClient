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

  public aeroplanes: Aeroplane[];
  public aeroplane: Aeroplane = new Aeroplane();

  constructor(private router: Router, private aeroplaneService: AeroplaneService) { }

  ngOnInit() {
    this.aeroplaneService.getAll().subscribe((data) => this.aeroplanes = data);
  }

  create() {
    this.aeroplaneService.create(this.aeroplane);
  }

  delete(id: string) {
    this.aeroplaneService.delete(id);
    this.aeroplanes = this.aeroplanes.filter(i => { return i.id !== id; });
  }

  goToDetail(id: string) {
    this.router.navigate(['/aeroplanes', id]);
  }

}
