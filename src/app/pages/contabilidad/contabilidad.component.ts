import { Component, OnInit } from '@angular/core';
import { DialogService } from 'src/app/core/services/dialog.service';
import { ExternalApiService } from 'src/app/core/services/external-api.service';


export interface AsientoContableData {
  auxiliar: number
  cuentaContable: number
  descripcion: string
  estado: string
  fechaRegistro: string
  id: number
  monto: number
  tipoMovimiento: string
}

@Component({
  selector: 'app-contabilidad',
  templateUrl: './contabilidad.component.html',
  styleUrls: ['./contabilidad.component.scss']
})
export class ContabilidadComponent implements OnInit {


  public dataAsiento: AsientoContableData[] = []
  public showSpinner: boolean = true
  public currentPage: number = 1

  constructor( private dialogServices: DialogService,private apiExternal: ExternalApiService) { }

  ngOnInit(): void {

    this.apiExternal.GetAccountingEntry().subscribe({
      next: (data: any) => {
       setTimeout(()=>{
        this.dataAsiento = data.asientoContable as AsientoContableData[]
        this.showSpinner = !this.showSpinner
       },1000)
      },
      error: () => {
        this.showSpinner = !this.showSpinner
      }
    })

  }

  
  public openAsiento(){
    this.dialogServices.openGenerateAsiento()
  }


}
