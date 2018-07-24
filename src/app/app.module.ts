import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { StewardessesModule } from './stewardesses/stewardesses.module';
import { PilotsComponent } from './pilots/pilots.component';

@NgModule({
  declarations: [
    AppComponent,
    PilotsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    StewardessesModule
  ],
  providers: [],
  bootstrap: [PilotsComponent]
})
export class AppModule { }
