import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-percentage-charts',
  templateUrl: './percentage-charts.component.html',
  styleUrls: ['./percentage-charts.component.css']
})
export class PercentageChartsComponent implements OnInit{
  @Input() name:string = '';
  @Input() count:number = 0;
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    series: [{
      data: [0,0],
      type: 'pie'
    }]
  }
  ngOnInit(){
    console.log(this.count)
    this.chartOptions = {
      series: [{
        data: [this.count,100-this.count],
        type: 'pie'
      }]
  }
  }
}
