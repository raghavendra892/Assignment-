import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';

const mArray = [
  MatToolbarModule, MatIconModule, MatButtonModule, MatDialogModule, MatFormFieldModule,
  MatInputModule, MatDatepickerModule, MatNativeDateModule, MatRadioModule, MatSelectModule,MatSnackBarModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...mArray
  ],
  exports: [...mArray]
})
export class MaterialModule { }
