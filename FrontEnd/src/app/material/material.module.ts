import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatGridListModule,
  MatFormFieldModule,
  MatInputModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatSidenavModule,
  MatDialogModule,
  
  
  
} from '@angular/material';

import { MatMomentDateModule } from '@angular/material-moment-adapter';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatSidenavModule,
    MatDialogModule
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatSidenavModule,
    MatDialogModule
  ]
})

export class MaterialModule { }
