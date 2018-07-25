import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AeroplaneType } from './aeroplane-type.model';


@Injectable({
  providedIn: 'root'
})
export class AeroplaneTypeService {

  url = 'http://localhost:57338/api/aeroplanetypes/';

  constructor(private http: HttpClient) { }

  getAll(): Observable<AeroplaneType[]> {
    return this.http.get<AeroplaneType[]>(this.url);
  }

  get (id: string): Observable<AeroplaneType> {
    return this.http.get<AeroplaneType>(this.url + id);
  }

  create(aeroplaneTypes: AeroplaneType): Observable<AeroplaneType>{
    return this.http.post<AeroplaneType>(this.url, aeroplaneTypes); 
  }

  update(id: string, aeroplaneTypes: AeroplaneType): Observable<AeroplaneType> {
    return this.http.put<AeroplaneType>(this.url + id, aeroplaneTypes);
  }

  delete(id: string) {
    this.http.delete(this.url + id).subscribe(
      () => {
        console.log("DELETE call successful value returned in body");
      },
      response => {
        console.log("DELETE call in error", response);
      });
  }
}
