import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Supplier } from 'src/app/core/models/supplier';
import { DepartmentService } from 'src/app/core/services/department.service';
import { DialogService } from 'src/app/core/services/dialog.service';
import { GeneralStateService } from 'src/app/core/services/general-state.service';
import { SupplierService } from 'src/app/core/services/supplier.service';

@Component({
  selector: 'app-list-providers',
  templateUrl: './list-providers.component.html',
  styleUrls: ['./list-providers.component.scss']
})
export class ListProvidersComponent implements OnInit {

  supplier: Supplier[] = []
  public currentPage: number = 1

  constructor(
    private generalStateServices: GeneralStateService,
    private dialogServices: DialogService,
    private supplierServices: SupplierService,
    private toastService: ToastrService,
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
    this.supplierServices.list().subscribe({
      next: (data) => {
        console.log(data);
        
        this.supplier = data
      }
    })
  }

  public open() {
    this.dialogServices.openAddEditSupplier()
  }

  public update(item: Supplier) {
    this.dialogServices.openAddEditSupplier(item)
  }

  public delete(id: number) {
    this.dialogServices.confirmDelete(id).subscribe((data) => {

      if (data) {
        this.supplierServices.delete(id).subscribe(() => {
          this.toastService.success('Eliminado')
          this.generalStateServices.dispachEvent()
        })
      }

    })
  }

}
