import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Aeroplane } from './aeroplane.model';


@Injectable({
  providedIn: 'root'
})
export class AeroplaneService {

  url = 'http://localhost:57338/api/aeroplanes/';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Aeroplane[]> {
    return this.http.get<Aeroplane[]>(this.url);
  }

  get (id: string): Observable<Aeroplane> {
    return this.http.get<Aeroplane>(this.url + id);
  }

  create(aeroplane: Aeroplane) {
    this.http.post<Aeroplane>(this.url, aeroplane).subscribe(); 
  }

  update(id: string, aeroplane: Aeroplane) {
    this.http.put<Aeroplane>(this.url + id, aeroplane).subscribe();
  }

  delete(id: string) {
    this.http.delete(this.url + id).subscribe();
  }
}
