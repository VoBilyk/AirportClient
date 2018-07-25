import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Crew } from './crew.model';


@Injectable({
  providedIn: 'root'
})
export class CrewService {

  url = 'http://localhost:57338/api/crews/';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Crew[]> {
    return this.http.get<Crew[]>(this.url);
  }

  get(id: string): Observable<Crew> {
    return this.http.get<Crew>(this.url + id);
  }

  create(crew: Crew) {
    this.http.post<Crew>(this.url, crew).subscribe();
  }

  update(id: string, crew: Crew) {
    this.http.put<Crew>(this.url + id, crew).subscribe();
  }

  delete(id: string) {
    this.http.delete(this.url + id).subscribe();
  }
}
