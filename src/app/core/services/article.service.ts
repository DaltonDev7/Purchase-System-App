import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/enviroments/enviroments';

@Injectable({
  providedIn: 'root'
})
export class ArticleService extends BaseService<any> {

  constructor(http: HttpClient) {
    super(http, 'article');
  }

  public getTotalArticles() {
    return this.http.get(`${environment.apiUrl}/article/getTotalArticles`)
  }

}
