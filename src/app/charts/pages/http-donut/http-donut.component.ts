import { Component, OnInit } from '@angular/core';

import { ChartType } from 'chart.js';
import { Label, MultiDataSet } from 'ng2-charts';

import { ChartsService } from '../../services/charts.service';

@Component({
  selector: 'app-http-donut',
  templateUrl: './http-donut.component.html',
  styles: [],
})
export class HttpDonutComponent implements OnInit {
  public doughnutChartLabels: Label[] = [];
  public doughnutChartData: MultiDataSet = [];
  public doughnutChartType: ChartType = 'doughnut';

  constructor(private chartsService: ChartsService) {}

  ngOnInit(): void {
    this.chartsService.getUsersBySocialMedia().subscribe({
      next: (data) => {
        const labels: string[] = Object.keys(data);
        const values: any[] = Object.values(data);
        this.doughnutChartLabels = labels;
        this.doughnutChartData.push(values);
      },
    });
  }
}
