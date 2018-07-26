import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPageComponent } from './main-page/main-page.component'
import { StewardessDetailComponent } from './stewardesses/stewardess-detail/stewardess-detail.component';
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
  { path: '', component: MainPageComponent },

  { path: 'stewardesses', component: StewardessListComponent },
  { path: 'stewardesses/:id', component: StewardessDetailComponent },
  
  { path: 'pilots', component: PilotListComponent },
  { path: 'pilots/:id', component: PilotDetailComponent },

  { path: 'aeroplanes', component: AeroplaneListComponent },
  { path: 'aeroplanes/:id', component: AeroplaneDetailComponent },

  { path: 'aeroplanetypes', component: AeroplaneTypeListComponent },
  { path: 'aeroplanetypes/:id', component: AeroplaneTypeDetailComponent },

  { path: 'crews', component: CrewListComponent },
  { path: 'crews/:id', component: CrewDetailComponent },

  { path: 'departures', component: DepartureListComponent },
  { path: 'departures/:id', component: DepartureDetailComponent },

  { path: 'flights', component: FlightListComponent },
  { path: 'flights/:id', component: FlightDetailComponent },

  { path: 'tickets', component: TicketListComponent },
  { path: 'tickets/:id', component: TicketDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }