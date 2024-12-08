import { Routes } from '@angular/router';

export const statsRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/charts/charts.component').then(c => c.ChartsComponent),
  }
];
