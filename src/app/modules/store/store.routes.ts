import { Routes } from '@angular/router';

export const storeRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/store-list/store-list.component').then(c => c.StoreListComponent),
  },
  {
    path: ':storeId/products',
    loadComponent: () => import('./pages/product-list/product-list.component').then(c => c.ProductListComponent),
  },
  {
    path: ':storeId/stats',
    loadComponent: () => import('./pages/stats/stats.component').then(c => c.StatsComponent),
  }
];
