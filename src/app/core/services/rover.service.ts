import { Injectable } from '@angular/core';
import { Commands } from '../enums/commands.enum';
import { Rover } from '../models/rover';
import { IPosition } from '../interfaces/iposition';
import { IRover } from '../interfaces/irover';
import { ICoord } from '../interfaces/icoord';
import { PlateauService } from './plateau.service';
import { AppService } from './app.service';

@Injectable({
  providedIn: 'root',
})
export class RoverService {
  activeRover: Rover;
  roverList: Rover[] = [];

  public get events() {
    return this.appService.events;
  }

  public get plateau() {
    return this.plateauService.plateau;
  }

  constructor(private appService: AppService, private plateauService: PlateauService) {}

  public createRover(rover: IRover): Rover {
    const newRover = new Rover(rover);
    if (!this.offGridCheck(newRover.origin.coord)) return null;

    this.roverList.push(newRover);
    console.log('roverCreated', newRover);
    return newRover;
  }

  public removeRover(id: number) {
    const index = this.roverList.findIndex((x) => x.id === id);

    if (index >= 0) {
      this.roverList.splice(index, 1);
    }
  }

  public executeRoverCommands(rover: Rover): boolean {
    //Set as active rover
    this.activeRover = rover;
    console.log(rover);

    for (let cmd of rover.commandList) {
      // Prepare command to be executed;
      const nextPosition: IPosition = rover.prepareCommand(cmd);
      console.log('nextPosition', nextPosition);

      if (Commands[cmd] === Commands.M) {
        // If its a movement command, check if the Rover will stay whitin borders
        // or if it'll collide with another rover

        if (!this.offGridCheck(nextPosition.coord)) {
          rover.commandError = "Command error: Can't move offgrid.";
          return false;
        }

        if (!this.collisionCheck(nextPosition.coord)) {
          rover.commandError = "Command error: Can't move, collision ahead.";
          return false;
        }
      }

      // Execute command
      rover.moveTo(nextPosition);
    }
    console.log(`Rover[${rover.id}] commands finished executing.`);
    return true;
  }

  public offGridCheck(coord: ICoord) {
    // Check if Rover will be inside the plateau border
    // true if clear to move

    const plateau = this.plateauService.plateau;

    if (
      plateau.grid.bottomLeft.x > coord.x ||
      plateau.grid.bottomLeft.y > coord.y ||
      plateau.grid.upperRight.x < coord.x ||
      plateau.grid.upperRight.y < coord.y
    ) {
      return false;
    } else {
      return true;
    }
  }

  public collisionCheck(coord: ICoord) {
    // Check if Rover will collide with another rover
    // true if clear to move

    return this.roverList.findIndex((rover) => rover.position.coord.x === coord.x && rover.position.coord.y === coord.y) < 0;
  }
}
