import { Component, ComponentRef, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-percentage-charts',
  templateUrl: './percentage-charts.component.html',
  styleUrls: ['./percentage-charts.component.css']
})
export class PercentageChartsComponent implements OnInit{
  @Input() name:string = '';
  @Input() count:string = '';
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    series: [{
      data: [0,0],
      type: 'pie'
    }]
  }
  ngOnInit(){
    this.chartOptions = {
      title: {
        text: this.name,
        verticalAlign: 'middle',
        style:{
          fontWeight: 'bold',
          fontFamily: 'Arial'
        }
      },
      subtitle: {
        text: this.count + '%',
        verticalAlign: 'middle',
        y: -10,
        style: {
          fontWeight: 'bold',
          fontSize: 'large',
          fontFamily: 'Arial'
        }
      },
      series: [{
        data: [Number(this.count),100-Number(this.count)],
        innerSize: '85%',
        type: 'pie',
      }],
      plotOptions: {
        pie:{
          dataLabels: {
            enabled: false,
            },
            startAngle: 0,
            endAngle: 360,
            colors: ['#0080ab','#bcc8cc']
        }
      },
      chart: {
        animation: {duration: 1000}
      },
      credits: {enabled: false},
      tooltip: {
        enabled: false
      }

  }
  }
}
