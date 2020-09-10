import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Cardinals } from '../../core/enums/cardinals.enum';
import { RoverService } from '../../core/services/rover.service';
import { IRover } from '../../core/interfaces/irover';
import { Events } from '../../core/enums/events.enum';
import { Plateau } from '../../core/models/plateau';

@Component({
  selector: 'app-rover-form',
  templateUrl: './rover-form.component.html',
  styleUrls: ['./rover-form.component.scss'],
})
export class RoverFormComponent implements OnInit {
  roverForms: FormGroup[] = [];

  Cardinals = Cardinals;

  orientationOpts: any[] = [];

  get isFormsValid(): boolean {
    for (let f of this.roverForms) {
      if (!f.valid) return false;
    }
    return true;
  }

  get plateau(): Plateau {
    return this.roverService.plateau;
  }

  constructor(private fb: FormBuilder, private roverService: RoverService) {}

  ngOnInit(): void {
    this.orientationOpts = this.buildOptions();
    this.buildForm();
  }

  buildOptions() {
    // Create options for select input based on Cardinal Points enum

    const opts = [];
    for (let key of Object.keys(Cardinals)) {
      if (isNaN(+key)) {
        // Make sure to only get string keys
        const opt = { name: key, value: Cardinals[key] };
        opts.push(opt);
      }
    }
    return opts;
  }

  buildForm() {
    const controls = {
      x: new FormControl(null, [Validators.required, Validators.pattern('^[0-9]*$')]),
      y: new FormControl(null, [Validators.required, Validators.pattern('^[0-9]*$')]),
      orientation: new FormControl(null, [Validators.required]),
      commandInput: new FormControl('', [Validators.required, Validators.pattern('^[MmLlRr]*$')]),
    };

    const form = this.fb.group(controls);

    // Observe if origin coordinates of rover are valid
    form.valueChanges.subscribe((val) => {
      if (val.x && val.y) {
        const check = this.roverService.offGridCheck({ x: +val.x, y: +val.y });
        console.log('check off grid', check);
        if (!check) {
          form.setErrors({ offGrid: true });
        } else {
          form.setErrors(null);
        }
      }
    });

    // Set command input to uppercase
    form.controls['commandInput'].valueChanges.subscribe((v: string) => {
      if (v) {
        const value = v.toUpperCase();
        form.controls['commandInput'].setValue(value, { emitEvent: false });
      }
    });

    this.roverForms.push(form);
  }

  addRoverFormBtnClick() {
    this.buildForm();
  }

  removeRoverFormBtnClick(index: number) {
    this.roverForms.splice(index, 1);
  }

  removeLastCommandBtnClick(index: number) {
    const ctrl = this.roverForms[index].controls['commandInput'];
    if (ctrl.value.length) ctrl.setValue(ctrl.value.slice(0, -1));
  }

  addCommandBtnClick(index: number, cmd: string) {
    const ctrl = this.roverForms[index].controls['commandInput'];
    ctrl.setValue(ctrl.value + cmd);
  }

  nextBtnClick() {
    // if all rovers created emit event
    if (this.createRoversFromForms()) {
      this.roverService.events.next(Events.RoversCreated);
    }
  }

  private createRoversFromForms(): boolean {
    this.roverService.roverList = [];

    for (let form of this.roverForms) {
      const { x, y, orientation, commandInput } = form.value;

      const roverData: IRover = {
        origin: { coord: { x: +x, y: +y }, orientation: +orientation },
        commandInput: commandInput,
      };

      console.log('roverData', roverData);

      const rover = this.roverService.createRover(roverData);
      if (!rover) return;
    }
    this.roverService.events.next(Events.RoversCreated);
    return true;
  }
}
