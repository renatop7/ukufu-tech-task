import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { PlateauService } from '../../core/services/plateau.service';
import { Plateau } from '../../core/models/plateau';
import { ICoord } from '../../core/interfaces/icoord';

@Component({
  selector: 'app-plateau-form',
  templateUrl: './plateau-form.component.html',
  styleUrls: ['./plateau-form.component.scss'],
})
export class PlateauFormComponent implements OnInit {
  form: FormGroup;
  controls = {
    x: new FormControl(null, [Validators.required, Validators.pattern('^[0-9]*$')]),
    y: new FormControl(null, [Validators.required, Validators.pattern('^[0-9]*$')]),
  };

  constructor(private fb: FormBuilder, private plateauService: PlateauService) {
    this.form = this.fb.group(this.controls);
  }

  ngOnInit(): void {

    // Form validation observer
    this.form.valueChanges.subscribe((value) => {
      if (value.x === '0' && value.y === '0') {
        this.form.setErrors({ sameAsOrigin: true });
      } else {
        this.form.setErrors(null);
      }
    });
  }

  nextBtnClick() {
    //Create ICoord object
    const { x, y } = this.form.value;
    const coords: ICoord = {
      x: +x,
      y: +y,
    };

    const plateau: Plateau = this.plateauService.createPlateau(coords);

    if (!plateau) this.form.reset();
  }
}
