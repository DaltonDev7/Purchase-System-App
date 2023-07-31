import { Component, OnInit } from '@angular/core';
import { DialogService } from 'src/app/core/services/dialog.service';

@Component({
  selector: 'app-list-articles',
  templateUrl: './list-articles.component.html',
  styleUrls: ['./list-articles.component.scss']
})
export class ListArticlesComponent implements OnInit {

  constructor(private dialogServices: DialogService){}

  ngOnInit(): void {
    
  }

  public open(){
    this.dialogServices.openAddEditArticles()
  }

}
