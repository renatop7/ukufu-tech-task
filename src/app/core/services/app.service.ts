import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Events } from '../enums/events.enum';
import { ICoord } from '../interfaces/icoord';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  events: BehaviorSubject<Events> = new BehaviorSubject(Events.AppStarted);

  constructor() {}
}
