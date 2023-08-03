import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddEditDeparmentsComponent } from '../add-edit-deparments/add-edit-deparments.component';
import { BrandServices } from 'src/app/core/services/brand.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { GeneralStateService } from 'src/app/core/services/general-state.service';

@Component({
  selector: 'app-add-edit-brand',
  templateUrl: './add-edit-brand.component.html',
  styleUrls: ['./add-edit-brand.component.scss']
})
export class AddEditBrandComponent implements OnInit {

  public Description: string = ''
  public brandForm!: FormGroup
  public title: string = 'Agregar'
  public isUpdate = false;

  constructor(
    private toastService: ToastrService,
    private generalStateService : GeneralStateService,
    public dialogRef: MatDialogRef<AddEditDeparmentsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private brandServices: BrandServices,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.brandForm = this.fb.group({
      description: [null, [Validators.required, Validators.minLength(3)]]
    })

    if (this.data !== undefined) {
      console.log(this.data);
      this.brandForm.patchValue(this.data)
      this.title = 'Actualizar'
      this.isUpdate = true;
    }

  }

  public close(): void {
    this.dialogRef.close({ redireccionar: true });
  }

  public save() {
    this.brandServices.add(this.brandForm.value).subscribe({
      next: () => {
        this.toastService.success('Guardado!')
        this.dialogRef.close();
        this.generalStateService.dispachEvent()
      }
    })
  }

  public update() {
    this.brandServices.edit({
      ...this.data,
      description : this.brandForm.get('description')?.value
    }).subscribe({
      next: () => {
        this.toastService.success('Actualizado!')
        this.dialogRef.close();
        this.generalStateService.dispachEvent()
      }
    })
  }

}
