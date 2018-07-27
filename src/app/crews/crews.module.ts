import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';

import { CrewListComponent } from './crew-list/crew-list.component'
import { CrewDetailComponent } from './crew-detail/crew-detail.component';
import { CrewService } from './shared/crew.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    CrewDetailComponent,
    CrewListComponent
  ],
  providers:[
    CrewService
  ]
})
export class CrewsModule { }
