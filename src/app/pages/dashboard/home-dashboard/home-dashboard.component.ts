import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';


@Component({
  selector: 'app-home-dashboard',
  templateUrl: './home-dashboard.component.html',
  styleUrls: ['./home-dashboard.component.scss']
})
export class HomeDashboardComponent implements OnInit {


  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: string[] = ['Apple', 'Banana', 'Kiwifruit', 'Blueberry', 'Orange', 'Grapes'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];
  barChartData: any[] = [
    { data: [45, 37, 60, 70, 46, 33], label: 'Best Fruits' }
  ];
  constructor(){}

  ngOnInit(): void {
    
  }

}
