import { TestBed } from '@angular/core/testing';
import { RoverService } from './rover.service';
import { PlateauService } from './plateau.service';
import { Rover } from '../models/rover';
import { Cardinals } from '../enums/cardinals.enum';

describe('RoverService', () => {
  let service: RoverService;
  let plateauService: PlateauService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoverService);
    plateauService = TestBed.inject(PlateauService);
  });

  it('Service Created', () => {
    expect(service).toBeTruthy();
  });

  it('OffGrid validation method', () => {
    plateauService.createPlateau({ x: 5, y: 5 });

    const withinBorders = service.offGridCheck({ x: 4, y: 4 });
    const offGrid = service.offGridCheck({ x: 6, y: 6 });

    expect(withinBorders && !offGrid).toBeTruthy();
  });

  it('Collision validation method', () => {
    const roverA = new Rover({
      origin: { coord: { x: 1, y: 1 }, orientation: Cardinals.N },
      commandInput: 'LR',
    });

    const roverB = new Rover({
      origin: { coord: { x: 2, y: 2 }, orientation: Cardinals.N },
      commandInput: 'LR',
    });

    service.roverList = [roverA, roverB];

    const validation_1 = service.collisionCheck({ x: 2, y: 2 });
    const validation_2 = service.collisionCheck({ x: 4, y: 1 });

    expect(!validation_1 && validation_2).toBeTruthy();
  });

  it('Rover creation method', () => {
    plateauService.createPlateau({ x: 5, y: 5 });

    const rover = service.createRover({
      origin: { coord: { x: 1, y: 1 }, orientation: Cardinals.N },
      commandInput: 'LMRRLRMLMRLM',
    });

    expect(rover).toBeTruthy();
  });
});
