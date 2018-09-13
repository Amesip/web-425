import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms'

@Component({
  selector: 'app-unicorn',
  templateUrl: './unicorn.html',
  styleUrls: ['./unicorn.css']
})
export class UnicornComponent implements OnInit {

  form: FormGroup;

  description: string;
  passwordreset: string;
  spywareremoval: string;
  ramupgrade: string;
  softwareinstallation: string;
  tuneup: string;
  keyboardcleaning: string;
  diskcleanup: string;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<UnicornComponent>,
    @Inject(MAT_DIALOG_DATA) data) {

    this.description = data.description;
    this.passwordreset = data.passwordreset;
    this.spywareremoval = data.spywareremoval
    this.ramupgrade = data.ramupgrade
    this.softwareinstallation = data.softwareinstallation
    this.tuneup = data.tuneup
    this.keyboardcleaning = data.keyboardcleaning
    this.diskcleanup = data.diskcleanup
  }

  ngOnInit() {
    this.form = this.fb.group({
      description: [this.description, []],
      passwordreset: [this.passwordreset, []],
      spywareremoval: [this.spywareremoval, []],
      ramupgrade: [this.ramupgrade, []],
      softwareinstallation: [this.softwareinstallation, []],
      tuneup: [this.tuneup, []],
      keyboardcleaning: [this.keyboardcleaning, []],
      diskcleanup: [this.diskcleanup, []],
        });
  }

  save() {
    this.dialogRef.close(this.form.value);
  }

  close() {
    this.dialogRef.close();
  }
}