import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoverFormComponent } from './rover-form/rover-form.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [RoverFormComponent],
  imports: [CommonModule, CoreModule.forRoot()],
  exports: [RoverFormComponent],
})
export class RoverModule {}
