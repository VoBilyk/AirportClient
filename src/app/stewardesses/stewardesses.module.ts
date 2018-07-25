import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';

import { StewardessService } from './shared/stewardess.service';
import { StewardessDetailComponent } from './stewardess-detail/stewardess-detail.component';
import { StewardessListComponent } from './stewardess-list/stewardess-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
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