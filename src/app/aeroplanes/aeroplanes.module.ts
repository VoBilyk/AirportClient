import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AeroplaneListComponent } from './aeroplane-list/aeroplane-list.component'
import { AeroplaneDetailComponent } from './aeroplane-detail/aeroplane-detail.component';
import { AeroplaneService } from './shared/aeroplane.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    AeroplaneDetailComponent,
    AeroplaneListComponent
  ],
  providers:[
    AeroplaneService
  ]
})
export class AeroplanesModule { }
