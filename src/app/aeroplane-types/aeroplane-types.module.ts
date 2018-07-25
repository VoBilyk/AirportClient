import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AeroplaneTypeListComponent } from './aeroplane-type-list/aeroplane-type-list.component'
import { AeroplaneTypeDetailComponent } from './aeroplane-type-detail/aeroplane-type-detail.component';
import { AeroplaneTypeService } from './shared/aeroplane-type.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    AeroplaneTypeListComponent,
    AeroplaneTypeDetailComponent
  ],
  providers:[
    AeroplaneTypeService
  ]
})
export class AeroplaneTypesModule { }