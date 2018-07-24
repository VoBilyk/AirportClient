import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Stewardess } from './stewardess.model';


@Injectable({
  providedIn: 'root'
})
export class StewardessService {

  url = 'http://localhost:57338/api/stewardesses/';

  constructor(private http: HttpClient) { }

  getAll (): Observable<Stewardess[]> {
    return this.http.get<Stewardess[]>(this.url);
  }

  get (id: string): Observable<Stewardess> {
    return this.http.get<Stewardess>(this.url + id);
  }

  create(stewardess: Stewardess): Observable<Stewardess>{
    return this.http.post<Stewardess>(this.url, stewardess); 
  }

  update(id: string, stewardess: Stewardess): Observable<Stewardess> {
    return this.http.put<Stewardess>(this.url + id, stewardess);
  }

  delete(id: string){
    return this.http.delete(this.url + id);
  }
}
