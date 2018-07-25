import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Pilot } from './pilot.model';

// @Injectable({
//   providedIn: 'root'
// })

@Injectable()
export class PilotService {

  url = 'http://localhost:57338/api/pilots/';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Pilot[]> {
    return this.http.get<Pilot[]>(this.url);
  }

  delete(id: string) {
    this.http.delete(this.url + id).subscribe(
      (val) => {
        console.log("DELETE call successful value returned in body",
          val);
      },
      response => {
        console.log("DELETE call in error", response);
      },
      () => {
        console.log("The DELETE observable is now completed.");
      });
  }
}
