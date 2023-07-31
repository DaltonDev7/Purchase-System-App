import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListArticlesComponent } from './list-articles/list-articles.component';

const routes : Routes = [
  {
    path: '',
    component: ListArticlesComponent
  }
]



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class ArticlesRoutingModule { }
