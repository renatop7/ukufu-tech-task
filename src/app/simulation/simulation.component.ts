import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Cardinals } from '../core/enums/cardinals.enum';
import { RoverService } from '../core/services/rover.service';
import { Rover } from '../core/models/rover';
import { Events } from '../core/enums/events.enum';
import { Plateau } from '../core/models/plateau';
import { PlateauService } from '../core/services/plateau.service';

@Component({
  selector: 'app-simulation',
  templateUrl: './simulation.component.html',
  styleUrls: ['./simulation.component.scss'],
})
export class SimulationComponent implements OnInit {
  simulations: any[] = null;

  Cardinals = Cardinals;

  simulationStarted = false;
  simulationError = false;
  simulationDone = false;

  public get plateau(): Plateau {
    return this.plateauService.plateau;
  }

  constructor(private plateauService: PlateauService, private roverService: RoverService) {}

  ngOnInit(): void {
    this.roverService.events.subscribe((val) => {
      if (val === Events.RoversCreated) {
        this.prepareSimulations(this.roverService.roverList);
      }
    });
  }

  prepareSimulations(rovers: Rover[]) {
    this.simulations = rovers.map((rover) => {
      const simulation = { rover: rover, result: null };
      return simulation;
    });
  }

  runSimulation() {
    console.log('runSimulation', this.roverService.roverList);

    this.simulationStarted = true;
    this.simulations.forEach((s, i) => {
      s.result = this.roverService.executeRoverCommands(s.rover);
      if (!s.result) this.simulationError = true;
    });

    this.simulationDone = true;
  }

  restartSimulation() {
    this.simulationStarted = false;
    this.simulationError = false;
    this.simulationDone = false;

    this.plateauService.plateau = null;
    this.roverService.roverList = null;

    this.roverService.events.next(Events.SimulationReset);
  }
}
