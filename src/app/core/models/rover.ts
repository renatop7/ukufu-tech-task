import { IRover } from '../interfaces/irover';
import { IPosition } from '../interfaces/iposition';
import { Commands } from '../enums/commands.enum';
import { Cardinals } from '../enums/cardinals.enum';

export class Rover implements IRover {
  id: number;

  origin: IPosition;
  position: IPosition;

  commandInput: string = '';
  commandList: string[] = [];

  get x(): number {
    return this.position.coord.x;
  }

  get y(): number {
    return this.position.coord.y;
  }

  get orientation(): string {
    return Cardinals[this.position.orientation];
  }

  commandError: string = null;

  constructor(data: IRover) {
    this.id = +Date.now();
    this.origin = data.origin;
    this.position = { ...data.origin };
    this.commandInput = data.commandInput;
    this.commandList = this.commandInput.split('');
  }

  public prepareCommand(cmd: string): IPosition {

    // Prepare command to be executed
    // Return nextPosition of rover

    const cmdValue = Commands[cmd];

    console.log('cmdValue', cmdValue);

    if (cmdValue === Commands.M) {
      switch (this.position.orientation) {
        case Cardinals.N:
          return {
            coord: { x: this.x, y: this.y + 1 },
            orientation: this.position.orientation,
          };
        case Cardinals.E:
          return {
            coord: { x: this.x + 1, y: this.y },
            orientation: this.position.orientation,
          };
        case Cardinals.S:
          return {
            coord: { x: this.x, y: this.y - 1 },
            orientation: this.position.orientation,
          };
        case Cardinals.W:
          return {
            coord: { x: this.x - 1, y: this.y },
            orientation: this.position.orientation,
          };
      }
    } else {
      const position = { ...this.position };
      position.orientation = this.toCardinalEnum(position.orientation + cmdValue);
      return position;
    }
  }

  public moveTo(pos: IPosition) {
    // Move to newPosition after checks in Service

    console.log('moveTo', pos);
    this.position = pos;
  }

  private toCardinalEnum(degree: number) {
    if (degree < 0) {
      return degree + 360;
    } else if (degree >= 360) {
      return degree - 360;
    } else {
      return degree;
    }
  }
}
