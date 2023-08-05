import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/core/models/brand';
import { BrandServices } from 'src/app/core/services/brand.service';
import { DialogService } from 'src/app/core/services/dialog.service';
import { GeneralStateService } from 'src/app/core/services/general-state.service';

@Component({
  selector: 'app-list-brand',
  templateUrl: './list-brand.component.html',
  styleUrls: ['./list-brand.component.scss']
})
export class ListBrandComponent implements OnInit {

  brand: Brand[] = []
  public currentPage: number = 1

  constructor(
    private generalStateServices: GeneralStateService,
    private dialogServices: DialogService,
    private branService: BrandServices,
    private toastService: ToastrService,
    private activedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.activedRoute.data.subscribe({
      next: (data: any) => {
        console.log(data);

        this.brand = data.brands

      }
    })

    this.generalStateServices.getEvent().subscribe({
      next: () => {
        this.getBrands()
      }
    })
  }


  public getBrands() {
    this.branService.list().subscribe({
      next: (brands) => {
        this.brand = brands
      }
    })
  }

  public open() {
    this.dialogServices.openAddEditBrand()
  }

  public update(item: Brand) {
    this.dialogServices.openAddEditBrand(item)
  }

  public delete(id: number) {
    this.dialogServices.confirmDelete(id).subscribe((data) => {

      if (data) {
        this.branService.delete(id).subscribe(() => {
          this.toastService.success('Eliminado')
          this.generalStateServices.dispachEvent()
        })
      }

    })
  }

}
