import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UnitMeasurement } from 'src/app/core/models/unit-measurement';
import { DialogService } from 'src/app/core/services/dialog.service';
import { GeneralStateService } from 'src/app/core/services/general-state.service';
import { UnitMeasurementService } from 'src/app/core/services/unit-measurement.service';

@Component({
  selector: 'app-list-unit-measurement',
  templateUrl: './list-unit-measurement.component.html',
  styleUrls: ['./list-unit-measurement.component.scss']
})
export class ListUnitMeasurementComponent {

  unitMeasurement: UnitMeasurement[] = []
  public currentPage: number = 1


  constructor(
    private generalStateServices: GeneralStateService,
    private dialogServices: DialogService,
    private toastService: ToastrService,
    private unitMeasurementServices: UnitMeasurementService
  ) { }

  ngOnInit(): void {
    this.getData()

    this.generalStateServices.getEvent().subscribe({
      next: () => {
        this.getData()
      }
    })

  }

  public getData() {
    this.unitMeasurementServices.list().subscribe(data => this.unitMeasurement = data)
  }

  public open() {
    this.dialogServices.openAddEditOpenMesurement()
  }


  public update(item: UnitMeasurement) {
    this.dialogServices.openAddEditOpenMesurement(item)
  }

  public delete(id: number) {
    this.dialogServices.confirmDelete(id).subscribe({
      next: (data) => {
        console.log(data);
        
        if(data){
          this.unitMeasurementServices.delete(id).subscribe(() => {
            this.toastService.success('Eliminado')
            this.generalStateServices.dispachEvent()
          })
        }
      }
    })
  }

}
