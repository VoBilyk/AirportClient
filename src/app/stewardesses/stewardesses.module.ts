import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { StewardessService } from './shared/stewardess.service';
import { StewardessComponent } from './stewardess/stewardess.component';
import { StewardessListComponent } from './stewardess-list/stewardess-list.component';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [
    StewardessComponent,
    StewardessListComponent
  ],

  providers: [
    StewardessService
  ]
})
export class StewardessesModule { }