import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { PlateauModule } from './plateau/plateau.module';
import { MaterialModule } from './core/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RoverModule } from './rover/rover.module';
import { SimulationComponent } from './simulation/simulation.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, SimulationComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule.forRoot(),
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    PlateauModule,
    RoverModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
