import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-edit-providers',
  templateUrl: './add-edit-providers.component.html',
  styleUrls: ['./add-edit-providers.component.scss']
})
export class AddEditProvidersComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddEditProvidersComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {

  }

  public close(): void {
    this.dialogRef.close({ redireccionar: true });
  }
}
