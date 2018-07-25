import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AeroplaneType } from '../shared/aeroplane-type.model';
import { AeroplaneTypeService } from '../shared/aeroplane-type.service';


@Component({
  selector: 'app-aeroplane-type-detail',
  templateUrl: './aeroplane-type-detail.component.html',
  styleUrls: ['./aeroplane-type-detail.component.css']
})
export class AeroplaneTypeDetailComponent implements OnInit {

  aeroplaneType: AeroplaneType = new AeroplaneType();
  id: string;

  constructor(private aeroplaneTypeService: AeroplaneTypeService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => this.id = params['id']);
    this.aeroplaneTypeService.get(this.id).subscribe(data => this.aeroplaneType = data);
  }

  update(id: string){
    this.aeroplaneTypeService.update(id, this.aeroplaneType);
  }

  delete(id: string) {
    this.aeroplaneTypeService.delete(id);
  }
}
