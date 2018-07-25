import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PilotListComponent } from './pilot-list/pilot-list.component'
import { PilotService } from './shared/pilot.service';
import { PilotRoutingModule } from './pilots-routing.module';
import { PilotDetailComponent } from './pilot-detail/pilot-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PilotListComponent,
    PilotDetailComponent
  ],
  providers: [
    PilotService
  ]
})
export class PilotsModule { }