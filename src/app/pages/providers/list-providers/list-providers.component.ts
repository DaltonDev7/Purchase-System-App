import { Component, OnInit } from '@angular/core';
import { DialogService } from 'src/app/core/services/dialog.service';

@Component({
  selector: 'app-list-providers',
  templateUrl: './list-providers.component.html',
  styleUrls: ['./list-providers.component.scss']
})
export class ListProvidersComponent implements OnInit {

  constructor(private dialogServices: DialogService) { }

  ngOnInit(): void {

  }

  public open() {
    this.dialogServices.openAddEditSupplier()
  }


}
