import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TicketListComponent } from './ticket-list/ticket-list.component'
import { TicketDetailComponent } from './ticket-detail/ticket-detail.component';
import { TicketService } from './shared/ticket.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    TicketDetailComponent,
    TicketListComponent
  ],
  providers:[
    TicketService
  ]
})
export class TicketsModule { }
