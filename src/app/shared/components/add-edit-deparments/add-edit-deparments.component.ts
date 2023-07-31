import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-edit-deparments',
  templateUrl: './add-edit-deparments.component.html',
  styleUrls: ['./add-edit-deparments.component.scss']
})
export class AddEditDeparmentsComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddEditDeparmentsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {

  }

  public close(): void {
    this.dialogRef.close({ redireccionar: true });
  }
}
