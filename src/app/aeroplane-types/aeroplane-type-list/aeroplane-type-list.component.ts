import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AeroplaneType } from '../shared/aeroplane-type.model'
import { AeroplaneTypeService } from '../shared/aeroplane-type.service';


@Component({
  selector: 'app-aeroplane-type-list',
  templateUrl: './aeroplane-type-list.component.html',
  styleUrls: ['./aeroplane-type-list.component.css']
})
export class AeroplaneTypeListComponent implements OnInit {


  public aeroplaneTypes: AeroplaneType[];
  public aeroplaneType: AeroplaneType = new AeroplaneType();

  constructor(private router: Router, private aeroplaneTypeService: AeroplaneTypeService) { }

  ngOnInit() {
    this.aeroplaneTypeService.getAll().subscribe((data) => this.aeroplaneTypes = data);
  }

  create() {
    this.aeroplaneTypeService.create(this.aeroplaneType);
  }

  delete(id: string) {
    this.aeroplaneTypeService.delete(id);
    this.aeroplaneTypes = this.aeroplaneTypes.filter(i => { return i.id !== id; });
  }

  goToDetail(id: string) {
    this.router.navigate(['/aeroplanetypes', id]);
  }

}
