import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StewardessListComponent } from './stewardesses/stewardess-list/stewardess-list.component';

import { PilotListComponent } from './pilots/pilot-list/pilot-list.component';
import { PilotDetailComponent } from './pilots/pilot-detail/pilot-detail.component';
import { AeroplaneDetailComponent } from './aeroplanes/aeroplane-detail/aeroplane-detail.component';
import { AeroplaneListComponent } from './aeroplanes/aeroplane-list/aeroplane-list.component';
import { AeroplaneTypeListComponent } from './aeroplane-types/aeroplane-type-list/aeroplane-type-list.component';
import { AeroplaneTypeDetailComponent } from './aeroplane-types/aeroplane-type-detail/aeroplane-type-detail.component';
import { CrewListComponent } from './crews/crew-list/crew-list.component';
import { CrewDetailComponent } from './crews/crew-detail/crew-detail.component';
import { DepartureListComponent } from './departures/departure-list/departure-list.component';
import { DepartureDetailComponent } from './departures/departure-detail/departure-detail.component';
import { FlightListComponent } from './flights/flight-list/flight-list.component';
import { FlightDetailComponent } from './flights/flight-detail/flight-detail.component';
import { TicketListComponent } from './tickets/ticket-list/ticket-list.component';
import { TicketDetailComponent } from './tickets/ticket-detail/ticket-detail.component';

const routes: Routes = [
  { path: 'stewardesses', component: StewardessListComponent },
  
  { path: 'pilots', component: PilotListComponent },
  { path: 'pilot-detail/:id', component: PilotDetailComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }