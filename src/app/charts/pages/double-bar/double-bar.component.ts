import { Component } from '@angular/core';
import { ChartDataSets } from 'chart.js';

@Component({
  selector: 'app-double-bar',
  templateUrl: './double-bar.component.html',
})
export class DoubleBarComponent {
  public suppliersLabels: string[] = ['2021', '2022', '2023', '2024', '2025'];

  public suppliersData: ChartDataSets[] = [
    { data: [100, 200, 300, 400, 500], label: 'Vendor A' },
    { data: [50, 250, 30, 450, 200], label: 'Vendor B' },
  ];

  public productsData: ChartDataSets[] = [
    {
      data: [200, 300, 400, 300, 100],
      label: 'Cars',
    },
  ];

  constructor() {}
}
