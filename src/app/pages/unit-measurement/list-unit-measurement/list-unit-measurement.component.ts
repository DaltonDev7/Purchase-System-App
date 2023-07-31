import { Component } from '@angular/core';
import { DialogService } from 'src/app/core/services/dialog.service';

@Component({
  selector: 'app-list-unit-measurement',
  templateUrl: './list-unit-measurement.component.html',
  styleUrls: ['./list-unit-measurement.component.scss']
})
export class ListUnitMeasurementComponent {

  
  constructor(private dialogServices: DialogService){}
  
  ngOnInit(): void {
  
  }
  
  public open(){
    this.dialogServices.openAddEditOpenMesurement()
  }

}
