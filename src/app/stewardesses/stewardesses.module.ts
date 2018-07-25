import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { StewardessService } from './shared/stewardess.service';
import { StewardessDetailComponent } from './stewardess-detail/stewardess-detail.component';
import { StewardessListComponent } from './stewardess-list/stewardess-list.component';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [
    StewardessDetailComponent,
    StewardessListComponent
  ],

  providers: [
    StewardessService
  ]
})
export class StewardessesModule { }