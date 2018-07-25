import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Ticket } from './ticket.model';


@Injectable({
  providedIn: 'root'
})
export class TicketService {

  url = 'http://localhost:57338/api/tickets/';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(this.url);
  }

  get(id: string): Observable<Ticket> {
    return this.http.get<Ticket>(this.url + id);
  }

  create(ticket: Ticket) {
    this.http.post<Ticket>(this.url, ticket).subscribe();
  }

  update(id: string, ticket: Ticket) {
    this.http.put<Ticket>(this.url + id, ticket).subscribe();
  }

  delete(id: string) {
    this.http.delete(this.url + id).subscribe();
  }
}
