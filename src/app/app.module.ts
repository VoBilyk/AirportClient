import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PilotsComponent } from './pilots/pilots.component';

@NgModule({
  declarations: [
    AppComponent,
    PilotsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [PilotsComponent]
})
export class AppModule { }
