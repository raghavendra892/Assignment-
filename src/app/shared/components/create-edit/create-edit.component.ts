import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { CustomRegex } from '../../const/validation.regexp';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-edit',
  templateUrl: './create-edit.component.html',
  styleUrls: ['./create-edit.component.scss']
})
export class CreateEditComponent implements OnInit {
  empForm !: FormGroup;
  @Output() clientSelected = new EventEmitter<string>();
  selectClient(client: string) {
    this.clientSelected.emit(client);
  }
  constructor(private _formBuilder: FormBuilder,private _snackBar: MatSnackBar,) { }
  staffArray: string[] = ['Manager', 'Developer', 'Designer', 'HR']
  ngOnInit(): void {
    this.empForm = this._formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email, Validators.pattern(CustomRegex.email)]],
      phoneNumber: ['', [Validators.required, Validators.maxLength(10), Validators.pattern(/^\d{10}$/)]],
      address: ['', [Validators.required]],
      dateOfJoining: ['', [Validators.required]],
      position: ['', [Validators.required]],
    })
  }
  onSubmit() {
    if (this.empForm.valid) {
      console.log(this.empForm.value);
      this.empForm.reset()

      this._snackBar.open("Deatils Printed In Console" ,"Close" ,{
        duration : 4000,
        verticalPosition : "top",
        horizontalPosition : "center"
      })
    }
  }
  get form() {
    return this.empForm.controls
  }
}
