import { Component } from '@angular/core';
import { DialogService } from 'src/app/core/services/dialog.service';

@Component({
  selector: 'app-list-deparments',
  templateUrl: './list-deparments.component.html',
  styleUrls: ['./list-deparments.component.scss']
})
export class ListDeparmentsComponent {

  constructor(private dialogServices: DialogService){}
  
  public open(){
    this.dialogServices.openAddEditDeparments()
  }

}
