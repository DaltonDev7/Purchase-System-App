import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-edit-articles',
  templateUrl: './add-edit-articles.component.html',
  styleUrls: ['./add-edit-articles.component.scss']
})
export class AddEditArticlesComponent implements OnInit {


  constructor(public dialogRef: MatDialogRef<AddEditArticlesComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any ){}

  ngOnInit(): void {
  
  }

  public close():void{
    this.dialogRef.close({redireccionar : true });
  }

}
