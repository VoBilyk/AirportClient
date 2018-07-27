import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Ticket } from '../shared/ticket.model';
import { TicketService } from '../shared/ticket.service';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css'],
  providers:[
    TicketService
  ]
})
export class TicketListComponent implements OnInit {

  public tickets: Ticket[];
  public ticket: Ticket = new Ticket();

  constructor(private router: Router, private ticketService: TicketService) { }

  ngOnInit() {
    this.ticketService.getAll().subscribe((data) => this.tickets = data);
  }

  create() {
    this.ticketService.create(this.ticket);
  }

  delete(id: string) {
    this.ticketService.delete(id);
    this.tickets = this.tickets.filter(i => { return i.id !== id; });
  }

  goToDetail(id: string) {
    this.router.navigate(['/tickets', id]);
  }

}
