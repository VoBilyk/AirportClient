import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component';

import { StewardessesModule } from './stewardesses/stewardesses.module';
import { PilotsModule } from './pilots/pilots.module';
import { AeroplaneTypesModule } from './aeroplane-types/aeroplane-types.module';
import { AeroplanesModule } from './aeroplanes/aeroplanes.module';
import { CrewsModule } from './crews/crews.module';
import { DeparturesModule } from './departures/departures.module';
import { FlightsModule } from './flights/flights.module';
import { TicketsModule } from './tickets/tickets.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PilotsModule,
    StewardessesModule,
    AeroplanesModule,
    AeroplaneTypesModule,
    CrewsModule,
    DeparturesModule,
    FlightsModule,
    TicketsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
