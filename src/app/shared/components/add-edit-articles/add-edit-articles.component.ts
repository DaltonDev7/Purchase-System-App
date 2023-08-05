import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ArticleService } from 'src/app/core/services/article.service';
import { ComboboxService } from 'src/app/core/services/combobox.service';
import { GeneralStateService } from 'src/app/core/services/general-state.service';
import { AddEditDeparmentsComponent } from '../add-edit-deparments/add-edit-deparments.component';

@Component({
  selector: 'app-add-edit-articles',
  templateUrl: './add-edit-articles.component.html',
  styleUrls: ['./add-edit-articles.component.scss']
})
export class AddEditArticlesComponent implements OnInit {

  brandCombox: any[] = []
  unitCombox:any[] = []

  public articleForm!: FormGroup
  public title: string = 'Agregar'
  public isUpdate = false;

  constructor( 
    private articleServices:ArticleService,
    private fb: FormBuilder,
    private toastService: ToastrService,
    private generalStateService : GeneralStateService,
    public dialogRef: MatDialogRef<AddEditArticlesComponent>,
    public comboBoxServices : ComboboxService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    this.comboBoxServices.getBrandCombox().subscribe((data) => {
      console.log(data);
      this.brandCombox = data
    });

    this.comboBoxServices.getUnitMeasurementCombox().subscribe((data)=>{
      this.unitCombox =data
    })

    this.articleForm = this.fb.group({
      description:[null, [Validators.required, Validators.minLength(3)]],
      brandId:[null, [Validators.required]],
      measurementUnitId:[null, [Validators.required]],
      stock:[null, [Validators.required]],
    })

    if (this.data !== undefined) {
      console.log(this.data);
      this.articleForm.patchValue(this.data)
      this.title = 'Actualizar'
      this.isUpdate = true;
    }

  }

  public close(): void {
    this.dialogRef.close();
  }

  public save() {

    console.log(this.articleForm.valid);

    console.log(this.articleForm.value);
    
    

    this.articleServices.add(this.articleForm.value).subscribe({
      next: () => {
        this.toastService.success('Guardado!')
        this.dialogRef.close();
        this.generalStateService.dispachEvent()
      }
    })
  }

  public update() {

    let payload = {
      ...this.data,
      ...this.articleForm.value
    }

    console.log(payload);
    

    this.articleServices.edit(payload).subscribe({
      next: () => {
        this.toastService.success('Actualizado!')
        this.dialogRef.close();
        this.generalStateService.dispachEvent()
      }
    })
  }

}
