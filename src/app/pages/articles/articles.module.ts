import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesRoutingModule } from './articles-routing.module';
import {MatDialogModule} from '@angular/material/dialog';
import { ListArticlesComponent } from './list-articles/list-articles.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    ListArticlesComponent
  ],
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    MatDialogModule,
    NgSelectModule,
    NgxPaginationModule
  ]
})
export class ArticlesModule { }
