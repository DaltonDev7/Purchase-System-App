import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddEditDeparmentsComponent } from '../add-edit-deparments/add-edit-deparments.component';
import { BrandServices } from 'src/app/core/services/brand.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-edit-brand',
  templateUrl: './add-edit-brand.component.html',
  styleUrls: ['./add-edit-brand.component.scss']
})
export class AddEditBrandComponent implements OnInit {


  public Description: string = ''
  public brandForm!: FormGroup

  constructor(public dialogRef: MatDialogRef<AddEditDeparmentsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private brandServices: BrandServices, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.brandForm = this.fb.group({
      Description: [null, [Validators.required, Validators.minLength(3)]]
    })
  }

  public close(): void {
    this.dialogRef.close({ redireccionar: true });
  }

  public save() {
    console.log(this.brandForm.value);
    console.log('asdfdsa');

    this.brandServices.add(this.Description).subscribe({
      next: (data) => {
        console.log('guardado');
      }
    })
  }

}
