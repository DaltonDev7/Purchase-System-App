import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BrandServices } from 'src/app/core/services/brand.service';
import { UnitMeasurementService } from 'src/app/core/services/unit-measurement.service';

@Component({
  selector: 'app-add-edit-unit-measurement',
  templateUrl: './add-edit-unit-measurement.component.html',
  styleUrls: ['./add-edit-unit-measurement.component.scss']
})
export class AddEditUnitMeasurementComponent {

  public Description: string = ''

  constructor(public dialogRef: MatDialogRef<AddEditUnitMeasurementComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private measurementUnit: UnitMeasurementService) { }

  ngOnInit(): void {

  }

  public close(): void {
    this.dialogRef.close({ redireccionar: true });
  }

  public save() {
    console.log(this.Description);
    console.log('asdfdsa');

    this.measurementUnit.add(this.Description).subscribe({
      next: (data) => {
        console.log('guardado');
      }
    })
  }

}
