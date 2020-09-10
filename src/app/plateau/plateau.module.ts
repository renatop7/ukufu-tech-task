import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlateauFormComponent } from './plateau-form/plateau-form.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [PlateauFormComponent],
  imports: [CommonModule, CoreModule.forRoot()],
  exports: [PlateauFormComponent],
})
export class PlateauModule {}
