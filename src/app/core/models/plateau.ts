import { IPlateau } from '../interfaces/iplateau';
import { IGrid } from '../interfaces/igrid';
import { ICoord } from '../interfaces/icoord';

export class Plateau implements IPlateau {

  grid: IGrid = {
    bottomLeft: {
      x: 0,
      y: 0,
    },
    upperRight: null,
  };

  constructor(upperRight: ICoord) {
    this.grid.upperRight = Object.assign(new Object(), upperRight);
  }
}
