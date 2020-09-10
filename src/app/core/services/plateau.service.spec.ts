import { TestBed } from '@angular/core/testing';

import { PlateauService } from './plateau.service';

describe('PlateauService', () => {
  let service: PlateauService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlateauService);
  });

  it('Service created', () => {
    expect(service).toBeTruthy();
  });

  it('Plateau coordinates validation method', () => {
    const coord_1 = { x: 0, y: 0 };
    const validation_1 = service.validatePlateauCoord(coord_1);

    const coord_2 = { x: -1, y: -1 };
    const validation_2 = service.validatePlateauCoord(coord_2);

    const coord_3 = { x: 0, y: -1 };
    const validation_3 = service.validatePlateauCoord(coord_3);

    const coord_4 = { x: -1, y: 0 };
    const validation_4 = service.validatePlateauCoord(coord_4);

    const coord_5 = { x: 1, y: 0 };
    const validation_5 = service.validatePlateauCoord(coord_5);

    const coord_6 = { x: 0, y: 1 };
    const validation_6 = service.validatePlateauCoord(coord_6);

    expect(!validation_1 && !validation_2 && !validation_3 && !validation_4 && validation_5 && validation_6).toBeTruthy();
  });

  it('Plateau creation method', () => {
    const coord = { x: 1, y: 1 };
    const plateau = service.createPlateau(coord);
    expect(plateau).toBeTruthy();
  });
});
