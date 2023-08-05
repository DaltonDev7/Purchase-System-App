import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Article } from 'src/app/core/models/article';
import { ArticleService } from 'src/app/core/services/article.service';
import { DepartmentService } from 'src/app/core/services/department.service';
import { DialogService } from 'src/app/core/services/dialog.service';
import { GeneralStateService } from 'src/app/core/services/general-state.service';

@Component({
  selector: 'app-list-articles',
  templateUrl: './list-articles.component.html',
  styleUrls: ['./list-articles.component.scss']
})
export class ListArticlesComponent implements OnInit {

  article: Article[] = []
  public currentPage: number = 1

  constructor(  
    private generalStateServices: GeneralStateService,
    private dialogServices: DialogService,
    private articleServices: ArticleService,
    private toastService: ToastrService
    ){}
    ngOnInit(): void {
      this.getData()
  
      
      this.generalStateServices.getEvent().subscribe({
        next: () => {
          this.getData()
        }
      })
  
    }
    
    public getData() {
      this.articleServices.list().subscribe({
        next: (data) => {
          console.log(data);
          
          this.article = data
        }
      })
    }
  
    public open() {
      this.dialogServices.openAddEditArticles()
    }
  
    public update(item: Article) {
      this.dialogServices.openAddEditArticles(item)
    }
  
    public delete(id: number) {
      this.dialogServices.confirmDelete(id).subscribe((data) => {
  
        if (data) {
          this.articleServices.delete(id).subscribe(() => {
            this.toastService.success('Eliminado')
            this.generalStateServices.dispachEvent()
          })
        }
  
      })
    }
}
