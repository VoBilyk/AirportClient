import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Departure } from './departure.model';


@Injectable({
  providedIn: 'root'
})
export class DepartureService {

  url = 'http://localhost:57338/api/departures/';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Departure[]> {
    return this.http.get<Departure[]>(this.url);
  }

  get (id: string): Observable<Departure> {
    return this.http.get<Departure>(this.url + id);
  }

  create(departure: Departure): Observable<Departure>{
    return this.http.post<Departure>(this.url, departure); 
  }

  update(id: string, departure: Departure): Observable<Departure> {
    return this.http.put<Departure>(this.url + id, departure);
  }

  delete(id: string) {
    this.http.delete(this.url + id).subscribe(
      (val) => {
        console.log("DELETE call successful value returned in body",
          val);
      },
      response => {
        console.log("DELETE call in error", response);
      });
  }
}
