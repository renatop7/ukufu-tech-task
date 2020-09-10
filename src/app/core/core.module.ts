import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoverService } from './services/rover.service';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PlateauService } from './services/plateau.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, MaterialModule, FlexLayoutModule, ReactiveFormsModule, FormsModule],
  exports: [MaterialModule, FlexLayoutModule, ReactiveFormsModule, FormsModule],
})
export class CoreModule {
  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [PlateauService, RoverService],
    };
  }
}
