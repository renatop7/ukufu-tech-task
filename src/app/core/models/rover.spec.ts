import { Rover } from './rover';
import { Cardinals } from '../enums/cardinals.enum';
import { type } from 'os';
import { IPosition } from '../interfaces/iposition';

describe('Rover', () => {
  it('should create an instance', () => {
    const roverData = {
      origin: { coord: { x: 1, y: 1 }, orientation: Cardinals.N },
      commandInput: 'LR',
    };
    expect(new Rover(roverData)).toBeTruthy();
  });

  it('should prepare command', () => {
    const roverData = {
      origin: { coord: { x: 1, y: 1 }, orientation: Cardinals.N },
      commandInput: 'LR',
    };

    const rover = new Rover(roverData);
    const cmd = rover.prepareCommand(rover.commandList[0]);
    expect(cmd.coord && cmd.orientation).toBeTruthy();
  });

  it('should move', () => {
    const roverData = {
      origin: { coord: { x: 1, y: 1 }, orientation: Cardinals.N },
      commandInput: 'LR',
    };

    const rover = new Rover(roverData);
    const nextPosition: IPosition = { coord: { x: 2, y: 2 }, orientation: Cardinals.E };

    rover.moveTo(nextPosition);

    expect(rover.position == nextPosition).toBeTruthy();
  });
});
