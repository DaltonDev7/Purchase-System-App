import { Component, OnInit } from '@angular/core';
import { DialogService } from 'src/app/core/services/dialog.service';

@Component({
  selector: 'app-list-brand',
  templateUrl: './list-brand.component.html',
  styleUrls: ['./list-brand.component.scss']
})
export class ListBrandComponent implements OnInit {

  constructor(private dialogServices: DialogService){}
  
  ngOnInit(): void {
  
  }
  
  public open(){
    this.dialogServices.openAddEditBrand()
  }

}
