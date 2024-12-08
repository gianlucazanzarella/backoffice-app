import { HttpErrorResponse } from '@angular/common/http';
import { createReducer, on } from '@ngrx/store';
import { StatsActions } from '../actions/stats.action';
import { IStats } from '../../../store/interfaces/stats.interface';
import { IStore } from '../../../store/interfaces/store.interface';

export const statsFeatureKey = 'stats';

export interface StatsState {
  stores: {
    data: IStore[];
    loading: boolean;
    error: HttpErrorResponse | null;
  };
  stats: {
    data: IStats[];
    loading: boolean;
    error: HttpErrorResponse | null;
  };

}

export const initialState: StatsState = {
  stores: {
    data: [],
    loading: false,
    error: null,
  },
  stats: {
    data: [],
    loading: false,
    error: null,
  }
};

export const StatsReducer = createReducer(
  initialState,

  // Get Stores list
  on(StatsActions.getStores, state => ({
    ...state,
    stores: {
      ...state.stores,
      data: [],
      loading: true,
      error: null
    }
  })),
  on(StatsActions.getStoresSuccess, (state, action) => ({
    ...state,
    stores: {
      ...state.stores,
      data: action.stores,
      loading: false,
      error: null
    }
  })),
  on(StatsActions.getStoresFailed, (state, action) => ({
    ...state,
    stores: {
      ...state.stores,
      data: [],
      loading: false,
      error: action.error
    }
  })),

  // Get Stats list
  on(StatsActions.getStats, state => ({
    ...state,
    stats: {
      ...state.stats,
      data: [],
      loading: true,
      error: null
    }
  })),
  on(StatsActions.getStatsSuccess, (state, action) => ({
    ...state,
    stats: {
      ...state.stats,
      data: action.stats,
      loading: false,
      error: null
    }
  })),
  on(StatsActions.getStatsFailed, (state, action) => ({
    ...state,
    stats: {
      ...state.stats,
      data: [],
      loading: false,
      error: action.error
    }
  })),
);