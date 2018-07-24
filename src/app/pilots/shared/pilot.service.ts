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

  getAll (): Observable<Pilot[]> {
    return this.http.get<Pilot[]>(this.url);
  }
}
