import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Ticket } from '../shared/ticket.model';
import { TicketService } from '../shared/ticket.service';

@Component({
  selector: 'app-ticket-detail',
  templateUrl: './ticket-detail.component.html',
  styleUrls: ['./ticket-detail.component.css']
})
export class TicketDetailComponent implements OnInit {

  ticket: Ticket = new Ticket();
  id: string;

  constructor(private ticketService: TicketService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.route.params.subscribe(params => this.id = params['id']);
    this.ticketService.get(this.id).subscribe(data => this.ticket = data);
  }

  update(id: string){
    this.ticketService.update(id, this.ticket);
    this.location.back();
  }

  delete(id: string) {
    this.ticketService.delete(id);
    this.location.back();
  }
}
