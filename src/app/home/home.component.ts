import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { AppService } from '../core/services/app.service';
import { Events } from '../core/enums/events.enum';
import { PlateauFormComponent } from '../plateau/plateau-form/plateau-form.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('stepper') stepper: MatStepper;
  @ViewChild('plateauForm') plateauForm: PlateauFormComponent;

  constructor(private appService: AppService) {}

  ngAfterViewInit(): void {}

  ngOnInit(): void {

    // Observe app events to move throught the stepper
    
    this.appService.events.subscribe((val) => {
      switch (val) {
        case Events.PlateauCreated:
          this.goToNextStep();
          break;
        case Events.RoversCreated:
          this.goToNextStep();
          break;
        case Events.SimulationReset:
          this.stepper.selectedIndex = 0;
          break;
      }
    });
  }

  goToNextStep() {
    this.stepper.selected.completed = true;
    this.stepper.next();
  }
}
