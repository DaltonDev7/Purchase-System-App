import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { DepartmentService } from 'src/app/core/services/department.service';
import { GeneralStateService } from 'src/app/core/services/general-state.service';

@Component({
  selector: 'app-add-edit-deparments',
  templateUrl: './add-edit-deparments.component.html',
  styleUrls: ['./add-edit-deparments.component.scss']
})
export class AddEditDeparmentsComponent implements OnInit {


  public departmentForm!: FormGroup
  public title: string = 'Agregar'
  public isUpdate = false;

  constructor(
    private departmentServices:DepartmentService,
    private fb: FormBuilder,
    private toastService: ToastrService,
    private generalStateService : GeneralStateService,
    public dialogRef: MatDialogRef<AddEditDeparmentsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) { }

  ngOnInit(): void {
    this.departmentForm = this.fb.group({
      name: [null, [Validators.required, Validators.minLength(3)]]
    })

    if (this.data !== undefined) {
      console.log(this.data);
      this.departmentForm.patchValue(this.data)
      this.title = 'Actualizar'
      this.isUpdate = true;
    }
  }


  public close(): void {
    this.dialogRef.close();
  }

  public save() {
    this.departmentServices.add(this.departmentForm.value).subscribe({
      next: () => {
        this.toastService.success('Guardado!')
        this.dialogRef.close();
        this.generalStateService.dispachEvent()
      }
    })
  }

  public update() {
    this.departmentServices.edit({
      ...this.data,
      description : this.departmentForm.get('name')?.value
    }).subscribe({
      next: () => {
        this.toastService.success('Actualizado!')
        this.dialogRef.close();
        this.generalStateService.dispachEvent()
      }
    })
  }
}
