import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ExternalApiService } from 'src/app/core/services/external-api.service';

@Component({
  selector: 'app-add-asiento-contable',
  templateUrl: './add-asiento-contable.component.html',
  styleUrls: ['./add-asiento-contable.component.scss']
})
export class AddAsientoContableComponent implements OnInit {

  asientoForm!: FormGroup

  constructor(
    private externalApi: ExternalApiService,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddAsientoContableComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {

    this.asientoForm = this.fb.group({
      description: [null, [Validators.required]],
      monto: [null, [Validators.required]]
    })

  }

  public close(): void {
    this.dialogRef.close();
  }

  public save() {
    this.externalApi.createAccountingEntry(this.asientoForm.value).subscribe({
      next: (data) => {
        console.log(data);
        console.log('enviado');
        
      }
    })

  }

}
