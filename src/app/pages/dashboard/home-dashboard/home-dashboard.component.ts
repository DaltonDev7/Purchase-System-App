import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartOptions, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { ArticleService } from 'src/app/core/services/article.service';
import { PurchaseOrderService } from 'src/app/core/services/purchase-order.service';


export interface TotalOrders {
  total: number
  totalQuantity: number
}

export interface MarcasMasUsados {
  articleName: string
  total: number
  totalQuantity: number
}

export interface MostArticleOrders {
  articleName: string
  total: number
  totalQuantity: number
}

interface barChartDataType {
  data: number[]
  label: string
}

@Component({
  selector: 'app-home-dashboard',
  templateUrl: './home-dashboard.component.html',
  styleUrls: ['./home-dashboard.component.scss']
})
export class HomeDashboardComponent implements OnInit {


  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  // Pie
  public pieChartOptions: any['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      datalabels: {
        formatter: (value: any, ctx: any) => {
          if (ctx.chart.data.labels) {
            return ctx.chart.data.labels[ctx.dataIndex];
          }
        },
      },
    },
  };
  public pieChartData: ChartData<'pie', number[], string | string[]> = {
    labels: [],
    datasets: [
      {
        data: [],
      },
    ],
  };
  public pieChartType: ChartType = 'pie';
  public pieChartPlugins = [];



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
  public totalArticles!: number;

  public showChart: boolean = false

  constructor(
    private purchaseOrderServices: PurchaseOrderService,
    private articleServices: ArticleService
  ) { }

  ngOnInit(): void {
    this.purchaseOrderServices.getAllTotalOrders().subscribe({
      next: (data: TotalOrders) => {
        console.log(data);
        this.totalOrders = data.total.toString()
      }
    })

    this.articleServices.getTotalArticles().subscribe((data: any) => this.totalArticles = data)


    this.purchaseOrderServices.getMostPurchaseArticles().subscribe({
      next: (articles: MostArticleOrders[]) => {

        articles.forEach((item) => {
          this.barChartLabels.push(item.articleName)
          this.barChartData[0].data.push(item.total)
        })
        
      }
    })


    this.purchaseOrderServices.getMostBrandsUsados().subscribe({
      next: (data: MarcasMasUsados[]) => {


        data.forEach((item) => {
          this.pieChartData.labels?.push(item.articleName)
          this.pieChartData.datasets[0].data.push(item.total)
        })
        this.showChart = true
      }
    })


  }

}
