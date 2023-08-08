import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IBaseServices } from '../interfaces/IBaseServices';
import { environment } from 'src/enviroments/enviroments';




@Injectable({
  providedIn: 'root'
})
export abstract class BaseService<T> implements IBaseServices<T> {
  endpoint: string = '';
  constructor(public http: HttpClient, endpoint: string) {
    this.endpoint = endpoint;
  }

  add(dto: any): Observable<any> {
    return this.http.post(environment.apiUrl + `/${this.endpoint}`, dto);
  }

  edit(dto: any): Observable<any> {
    return this.http.put(environment.apiUrl + `/${this.endpoint}`, dto);
  }

  list(): Observable<any> {
    return this.http.get(environment.apiUrl + `/${this.endpoint}`);
  }

  delete(id: number): Observable<any> {
    let params = new HttpParams().set('id', id);
    return this.http.delete(environment.apiUrl + `/${this.endpoint}/${id}`);
  }

  getById(id: number): Observable<any> {
    return this.http.get(environment.apiUrl + `/${this.endpoint}/${id}`);
  }

  filter(params:any){
    return this.http.get(environment.apiUrl + `/${this.endpoint}`, {params});
  }
}