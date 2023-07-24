import { Component, Input, OnInit } from '@angular/core';

import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
})
export class BarChartComponent implements OnInit {
  @Input() horizontal: boolean = false;
  @Input() barChartLabels: Label[] = [];
  @Input() barChartData: ChartDataSets[] = [];

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  constructor() {}

  ngOnInit(): void {
    this.barChartType = this.horizontal ? 'horizontalBar' : 'bar';
  }
}
