import { Component, OnInit } from '@angular/core';
import { Plateau } from './core/models/plateau';
import { RoverService } from './core/services/rover.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ukufu-tech-task';

  plateau: Plateau;

  rovers: any[] = [
    {
      origin: {
        coord: { x: 1, y: 2 },
        orientation: 0,
      },
      commandList: ['L', 'M', 'L', 'M', 'L', 'M', 'L', 'M', 'M'],
      commandInput: 'LMLMLMLMM',
    },
    {
      origin: {
        coord: { x: 3, y: 3 },
        orientation: 90,
      },
      commandList: ['M', 'M', 'R', 'M', 'M', 'R', 'M', 'R', 'R', 'M'],
      commandInput: 'MMRMMRMRRM',
    },
  ];

  constructor(private roverService: RoverService) {}

  ngOnInit(): void {
    this.initializeApp();
  }

  private initializeApp() {
    // this.addPlateau();
    // this.addRovers();

    // this.run();
  }

  addPlateau() {
    this.plateau = new Plateau({ x: 5, y: 5 });
  }

  addRovers() {
    for (let rover of this.rovers) {
      rover.plateauMap = this.plateau;
      const r = this.roverService.createRover(rover);
      r.commandList = rover.commandList;
    }
  }

  run() {
    for (let rover of this.roverService.roverList) {
      this.roverService.executeRoverCommands(rover);
    }
  }
}
