import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsModule as Ng2ChartsModule } from 'ng2-charts';

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
    HttpDonutComponent,
  ],
  imports: [CommonModule, Ng2ChartsModule, ChartsRoutingModule],
})
export class ChartsModule {}
