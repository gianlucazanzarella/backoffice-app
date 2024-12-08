import { Routes } from '@angular/router';

export const storeRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/store-list/store-list.component').then(c => c.StoreListComponent),
  },
  {
    path: ':storeId/products',
    loadComponent: () => import('./pages/product-list/product-list.component').then(c => c.ProductListComponent),
    children: [
      {
        path: 'create',
        loadComponent: () => import('./pages/product-create/product-create.component').then(c => c.ProductCreateComponent),
      }
    ]
  },
  {
    path: ':storeId/stats',
    loadComponent: () => import('./pages/stats/stats.component').then(c => c.StatsComponent),
  }
];
