import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideEffects } from '@ngrx/effects';
import { provideState, provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { routes } from './app.routes';
import { httpInterceptor } from './interceptors/http.interceptor';
import { uiFeatureKey, UiReducer } from './root-state/ui/reducers/ui.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideCharts(withDefaultRegisterables()),
    provideHttpClient(
      withInterceptors([httpInterceptor]),
    ),

    // NgRx Store
    provideStore(),
    provideState({ name: uiFeatureKey, reducer: UiReducer }),
    provideEffects(),
    provideStoreDevtools(),
  ]
};
