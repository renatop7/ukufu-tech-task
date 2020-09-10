import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDividerModule } from '@angular/material/divider';

const MaterialModules = [
  MatToolbarModule,
  MatCardModule,
  MatButtonModule,
  MatDialogModule,
  MatInputModule,
  MatIconModule,
  MatFormFieldModule,
  MatSelectModule,
  MatStepperModule,
  MatDividerModule,
];

@NgModule({
  declarations: [],
  imports: [CommonModule, MaterialModules],
  exports: [MaterialModules],
})
export class MaterialModule {}
