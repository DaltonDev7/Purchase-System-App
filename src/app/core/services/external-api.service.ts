import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/enviroments/enviroments';
import { MessageAsiento } from 'src/app/shared/components/add-asiento-contable/add-asiento-contable.component';

@Injectable({
  providedIn: 'root'
})
export class ExternalApiService  extends BaseService<any> {

  constructor(http: HttpClient) {
    super(http, 'ExternalServices');
  }

  public createAccountingEntry(payload:any){
    return this.http.post<MessageAsiento>(`${environment.apiUrl}/ExternalServices/CreateAccountingEntry`, payload)
  }

}
