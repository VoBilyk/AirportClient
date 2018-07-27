import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';

import { FlightListComponent } from './flight-list/flight-list.component'
import { FlightDetailComponent } from './flight-detail/flight-detail.component';
import { FlightService } from './shared/flight.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    FlightDetailComponent,
   FlightListComponent
  ],
  providers:[
    FlightService
  ]
})
export class FlightsModule { }
