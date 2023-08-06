import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/enviroments/enviroments';
import { MostArticleOrders, TotalOrders } from 'src/app/pages/dashboard/home-dashboard/home-dashboard.component';

@Injectable({
  providedIn: 'root'
})
export class PurchaseOrderService extends BaseService<any>{

  constructor(http: HttpClient) {
    super(http, 'purchaseorder');
  }

  public getAllTotalOrders(){
    return this.http.get<TotalOrders>(`${environment.apiUrl}/purchaseorder/SumOfAllTimePurchases`)
  }

  public getMostPurchaseArticles(){
    return this.http.get<MostArticleOrders[]>(`${environment.apiUrl}/purchaseorder/MostPurchasedArticles`)
  }

}
