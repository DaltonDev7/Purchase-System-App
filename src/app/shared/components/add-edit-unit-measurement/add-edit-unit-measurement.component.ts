import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { BrandServices } from 'src/app/core/services/brand.service';
import { GeneralStateService } from 'src/app/core/services/general-state.service';
import { UnitMeasurementService } from 'src/app/core/services/unit-measurement.service';

@Component({
  selector: 'app-add-edit-unit-measurement',
  templateUrl: './add-edit-unit-measurement.component.html',
  styleUrls: ['./add-edit-unit-measurement.component.scss']
})
export class AddEditUnitMeasurementComponent {

  public Description: string = ''
  unitForm!:FormGroup
  public title: string = 'Agregar'
  public isUpdate = false;

  constructor(
    private toastService: ToastrService,
    private generalStateService : GeneralStateService,
    public dialogRef: MatDialogRef<AddEditUnitMeasurementComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, 
    private measurementUnit: UnitMeasurementService,
    private fb: FormBuilder
    ) { }

  ngOnInit(): void {
    this.unitForm = this.fb.group({
      description: [null, [Validators.required, Validators.minLength(1)]]
    })

    if (this.data !== undefined) {
      console.log(this.data);
      this.unitForm.patchValue(this.data)
      this.title = 'Actualizar'
      this.isUpdate = true;
    }

  }

  public close(): void {
    this.dialogRef.close({ redireccionar: true });
  }

  public save() {

    this.measurementUnit.add(this.unitForm.value).subscribe({
      next: () => {
        this.toastService.success('Guardado!')
        this.dialogRef.close();
        this.generalStateService.dispachEvent()
      }
    })
  }

  
  public update() {
    this.measurementUnit.edit({
      ...this.data,
      description : this.unitForm.get('description')?.value
    }).subscribe({
      next: () => {
        this.toastService.success('Actualizado!')
        this.dialogRef.close();
        this.generalStateService.dispachEvent()
      }
    })
  }

}

