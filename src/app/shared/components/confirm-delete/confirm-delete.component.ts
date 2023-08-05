import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { BrandServices } from 'src/app/core/services/brand.service';
import { GeneralStateService } from 'src/app/core/services/general-state.service';

@Component({
  selector: 'app-confirm-delete',
  templateUrl: './confirm-delete.component.html',
  styleUrls: ['./confirm-delete.component.scss']
})
export class ConfirmDeleteComponent {

  constructor(
    public dialogRef: MatDialogRef<ConfirmDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,) { }

  public close(): void {
    this.dialogRef.close(false);
  }

  public cancelar(){
    this.dialogRef.close(false);
  }

  public aceptar(){
    this.dialogRef.close(true);
  }

}
