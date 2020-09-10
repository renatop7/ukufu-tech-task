import { Injectable } from '@angular/core';
import { Plateau } from '../models/plateau';
import { IPosition } from '../interfaces/iposition';
import { BehaviorSubject } from 'rxjs';
import { ICoord } from '../interfaces/icoord';
import { AppService } from './app.service';
import { Events } from '../enums/events.enum';

@Injectable({
  providedIn: 'root',
})
export class PlateauService {
  plateau = null;

  constructor(private appService: AppService) {}

  public createPlateau(coord: ICoord): Plateau {
    if (this.validatePlateauCoord(coord)) {
      this.plateau = new Plateau(coord);
      this.appService.events.next(Events.PlateauCreated);
      return this.plateau;
    } else {
      return null;
    }
  }

  public validatePlateauCoord(coord: ICoord) {
    if (coord.x < 0 || coord.y < 0) {
      return false;
    } else if (coord.x === 0 && coord.y === 0) {
      return false
    }else{
      return true;
    }
  }
}
