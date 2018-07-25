import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Flight } from './flight.model';


@Injectable({
  providedIn: 'root'
})
export class FlightService {

  url = 'http://localhost:57338/api/flights/';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Flight[]> {
    return this.http.get<Flight[]>(this.url);
  }

  get (id: string): Observable<Flight> {
    return this.http.get<Flight>(this.url + id);
  }

  create(pilot: Flight): Observable<Flight>{
    return this.http.post<Flight>(this.url, pilot); 
  }

  update(id: string, pilot: Flight): Observable<Flight> {
    return this.http.put<Flight>(this.url + id, pilot);
  }

  delete(id: string) {
    this.http.delete(this.url + id).subscribe(
      () => {
        console.log("DELETE call successful");
      },
      response => {
        console.log("DELETE call in error", response);
      });
  }
}
