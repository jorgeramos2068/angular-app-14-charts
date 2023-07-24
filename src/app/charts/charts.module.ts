import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsRoutingModule } from './charts-routing.module';
import { BarComponent } from './pages/bar/bar.component';
import { DoubleBarComponent } from './pages/double-bar/double-bar.component';
import { DonutComponent } from './pages/donut/donut.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { HttpDonutComponent } from './pages/http-donut/http-donut.component';


@NgModule({
  declarations: [
    BarComponent,
    DoubleBarComponent,
    DonutComponent,
    BarChartComponent,
    HttpDonutComponent
  ],
  imports: [
    CommonModule,
    ChartsRoutingModule
  ]
})
export class ChartsModule { }
