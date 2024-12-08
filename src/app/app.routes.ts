import { Routes } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';
import { StoreEffect } from './modules/store/state/effects/store.effect';
import { storeFeatureKey, StoreReducer } from './modules/store/state/reducers/store.reducer';
import { StoreService } from './modules/store/state/services/store.service';
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
      provideState({ name: storeFeatureKey, reducer: StoreReducer }),
      provideEffects(StoreEffect),
      StoreService
    ],
    children: storeRoutes
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
