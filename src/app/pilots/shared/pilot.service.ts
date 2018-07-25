import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  get(id: string): Observable<Pilot> {
    return this.http.get<Pilot>(this.url + id);
  }

  create(pilot: Pilot) {
    this.http.post<Pilot>(this.url, pilot).subscribe();
  }

  update(id: string, pilot: Pilot) {
    this.http.put<Pilot>(this.url + id, pilot).subscribe();
  }

  delete(id: string) {
    this.http.delete(this.url + id).subscribe();
  }
}
