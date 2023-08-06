import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { PurchaseOrderService } from 'src/app/core/services/purchase-order.service';


export interface TotalOrders {
  total: number
  totalQuantity: number
}

export interface MostArticleOrders {
  articleName: string
  total: number
  totalQuantity: number
}

interface barChartDataType {
  data:number[]
  label:string
}

@Component({
  selector: 'app-home-dashboard',
  templateUrl: './home-dashboard.component.html',
  styleUrls: ['./home-dashboard.component.scss']
})
export class HomeDashboardComponent implements OnInit {


  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: string[] = [];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];
  barChartData: barChartDataType[] = [
    { 
      data: [], 
      label: 'Mejores Articulos' 
    }
  ];

  public totalOrders: any;

  public showChart:boolean = false

  constructor(
    private purchaseOrderServices: PurchaseOrderService
  ) { }

  ngOnInit(): void {
    this.purchaseOrderServices.getAllTotalOrders().subscribe({
      next: (data: TotalOrders) => {
        console.log(data);
        this.totalOrders = data.total.toString()
      }
    })

    this.purchaseOrderServices.getMostPurchaseArticles().subscribe({
      next: (articles: MostArticleOrders[]) => {

        articles.forEach((item) => {
          this.barChartLabels.push(item.articleName)
          this.barChartData[0].data.push(item.total)
        })
        this.showChart = true
      }
    })
  }

}
