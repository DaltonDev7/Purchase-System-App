import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ComboboxService } from 'src/app/core/services/combobox.service';

@Component({
  selector: 'app-add-edit-articles',
  templateUrl: './add-edit-articles.component.html',
  styleUrls: ['./add-edit-articles.component.scss']
})
export class AddEditArticlesComponent implements OnInit {


  brandCombox: any[] = []

  constructor(public dialogRef: MatDialogRef<AddEditArticlesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private comboBoxServices: ComboboxService
  ) { }

  ngOnInit(): void {
    this.comboBoxServices.getBrandCombox().subscribe((data) => {
      console.log(data);
      this.brandCombox = data
    });
  }

  public close(): void {
    this.dialogRef.close({ redireccionar: true });
  }

}
