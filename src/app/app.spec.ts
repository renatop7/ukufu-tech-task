import { TestBed } from '@angular/core/testing';
import { RoverService } from './core/services/rover.service';
import { PlateauService } from './core/services/plateau.service';
import { Cardinals } from './core/enums/cardinals.enum';

describe('App', () => {
  let roverService: RoverService;
  let plateauService: PlateauService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    roverService = TestBed.inject(RoverService);
    plateauService = TestBed.inject(PlateauService);
  });

  it('Simulation executed', () => {
    const plateau = plateauService.createPlateau({ x: 5, y: 5 });

    const roverA = roverService.createRover({
      origin: { coord: { x: 1, y: 2 }, orientation: Cardinals.N },
      commandInput: 'LMLMLMLMM',
    });

    const roverB = roverService.createRover({
      origin: { coord: { x: 3, y: 3 }, orientation: Cardinals.E },
      commandInput: 'MMRMMRMRRM',
    });

    roverService.executeRoverCommands(roverA);
    roverService.executeRoverCommands(roverB);

    const resultA = roverA.position.coord.x === 1 && roverA.position.coord.y === 3 && roverA.position.orientation === Cardinals.N;
    const resultB = roverB.position.coord.x === 5 && roverB.position.coord.y === 1 && roverB.position.orientation === Cardinals.E;

    expect(resultA && resultB).toBeTruthy();
  });
});
