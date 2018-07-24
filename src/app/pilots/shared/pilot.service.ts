import { Injectable } from '@angular/core';
import { Pilot } from './pilot.model';

@Injectable({
  providedIn: 'root'
})
export class PilotService {

  private pilots : Pilot[] = [
    { id: '15', firstname:'Volodya', lastname: 'Bilyk'},
    { id: '17', firstname:'Igor', lastname: 'Karpyn'},
    { id: '16', firstname:'Petro', lastname: 'Krenz'}
];
  constructor() { }

  get() : Pilot[] {
    return this.pilots;
  }
}
