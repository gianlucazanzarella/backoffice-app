import { Routes } from '@angular/router';
import { storeRoutes } from './modules/store/store.routes';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'stats',
    pathMatch: 'full'
  },
  {
    path: 'stores',
    loadComponent: () => import('./modules/store/store.component').then(c => c.StoreComponent),
    providers: [
      // provideState({ name: storeFeatureKey, reducer: storeReducer })
    ],
    children: storeRoutes
  },
  {
    path: 'stats',
    loadComponent: () => import('./modules/stats/stats.component').then(c => c.StatsComponent)
  },
  {
    path: 'error',
    loadComponent: () => import('./modules/error/error.component').then(c => c.ErrorComponent)
  },
  {
    path: '**',
    redirectTo: 'error',
  },
];
