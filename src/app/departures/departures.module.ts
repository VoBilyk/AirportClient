import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DepartureListComponent } from './departure-list/departure-list.component'
import { DepartureDetailComponent } from './departure-detail/departure-detail.component';
import { DepartureService } from './shared/departure.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    DepartureDetailComponent,
    DepartureListComponent
  ],
  providers:[
    DepartureService
  ]
})
export class DeparturesModule { }
