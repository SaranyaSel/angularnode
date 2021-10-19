import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogModel } from '../shared/matDaialog.model';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  createForm: FormGroup;
  nameStyle: string;
  typeStyle: string;
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MatDialogModel
    ) { }

  ngOnInit() {
    this.createForm = new FormGroup({
      name: new FormControl(name, [
      Validators.required,
      Validators.pattern(
        "^[a-zA-Z0-9_\\-.!#$%&*+-/=?^_{|}~']+$"
      ),
      Validators.maxLength(250)
    ]),
    type: new FormControl('folder', Validators.required),
  });
  }
  selectedType(event) {
    console.log(event);
  }
  onSubmit(name: string, type: string) {
    if (this.createForm.valid) {
      this.data.name = name;
      this.data.type = type;
      console.log(this.data.name, this.data.type);
      const node = {nodeName: this.data.name, nodetype: this.data.type};
      this.dialogRef.close(node);
    } else {
      if (this.createForm.controls.name.status === 'INVALID') {
        this.nameStyle = 'error-msg';
      } else {
        this.nameStyle = 'success-msg';
      }
      if (this.createForm.controls.type.status === 'INVALID') {
        this.typeStyle = 'error-msg';
      } else {
        this.typeStyle = 'success-msg';
      }
    }
  }

}