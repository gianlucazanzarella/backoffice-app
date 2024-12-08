import { Routes } from '@angular/router';
import { storeRoutes } from './modules/store/store.routes';
import { provideState } from '@ngrx/store';
import { storeFeatureKey, StoreReducer } from './modules/store/state/reducers/store.reducer';
import { provideEffects } from '@ngrx/effects';
import { StoreEffect } from './modules/store/state/effects/store.effect';
import { StoreService } from './modules/store/state/services/store.service';
import { statsRoutes } from './modules/stats/stats.routes';
import { statsFeatureKey, StatsReducer } from './modules/stats/state/reducers/stats.reducer';
import { StatsEffect } from './modules/stats/state/effects/stats.effect';
import { StatsService } from './modules/stats/state/services/stats.service';

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
      provideState({ name: storeFeatureKey, reducer: StoreReducer }),
      provideEffects(StoreEffect),
      StoreService
    ],
    children: storeRoutes
  },
  {
    path: 'stats',
    loadComponent: () => import('./modules/stats/stats.component').then(c => c.StatsComponent),
    providers: [
      provideState({ name: statsFeatureKey, reducer: StatsReducer }),
      provideEffects(StatsEffect),
      StatsService
    ],
    children: statsRoutes
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
