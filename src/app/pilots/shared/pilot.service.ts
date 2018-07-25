import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Pilot } from './pilot.model';


@Injectable({
  providedIn: 'root'
})
export class PilotService {

  url = 'http://localhost:57338/api/pilots/';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Pilot[]> {
    return this.http.get<Pilot[]>(this.url);
  }

  get (id: string): Observable<Pilot> {
    return this.http.get<Pilot>(this.url + id);
  }

  create(pilot: Pilot): Observable<Pilot>{
    return this.http.post<Pilot>(this.url, pilot); 
  }

  update(id: string, pilot: Pilot): Observable<Pilot> {
    return this.http.put<Pilot>(this.url + id, pilot);
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
