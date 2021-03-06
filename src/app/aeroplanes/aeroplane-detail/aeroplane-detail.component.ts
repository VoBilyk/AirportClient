import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Aeroplane } from '../shared/aeroplane.model';
import { AeroplaneService } from '../shared/aeroplane.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-aeroplane-detail',
  templateUrl: './aeroplane-detail.component.html',
  styleUrls: ['./aeroplane-detail.component.css']
})
export class AeroplaneDetailComponent implements OnInit {

  aeroplane: Aeroplane = new Aeroplane();
  id: string;

  constructor(private aeroplaneService: AeroplaneService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.route.params.subscribe(params => this.id = params['id']);
    this.aeroplaneService.get(this.id).subscribe(data => this.aeroplane = data);
  }

  update(id: string){
    this.aeroplaneService.update(id, this.aeroplane);
    this.location.back();
  }

  delete(id: string) {
    this.aeroplaneService.delete(id);
    this.location.back();
  }


}
