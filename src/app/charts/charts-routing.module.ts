import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarComponent } from './pages/bar/bar.component';
import { DonutComponent } from './pages/donut/donut.component';
import { DoubleBarComponent } from './pages/double-bar/double-bar.component';
import { HttpDonutComponent } from './pages/http-donut/http-donut.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'bar', component: BarComponent },
      { path: 'double-bar', component: DoubleBarComponent },
      { path: 'donut', component: DonutComponent },
      { path: 'http-donut', component: HttpDonutComponent },
      { path: '**', redirectTo: 'bar' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChartsRoutingModule {}
