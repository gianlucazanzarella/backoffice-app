import { HttpErrorResponse } from '@angular/common/http';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { statsFeatureKey, StatsState } from '../reducers/stats.reducer';
import { IStore } from '../../../../shared/interfaces/store.interface';
import { IStats } from '../interfaces/stats.interface';

const getStatsState = createFeatureSelector<StatsState>(statsFeatureKey);

const getStores = createSelector(getStatsState, (state: StatsState): IStore[] => state.stores.data);
const getStoresLoading = createSelector(getStatsState, (state: StatsState): boolean => state.stores.loading);
const getStoresError = createSelector(getStatsState, (state: StatsState): HttpErrorResponse | null => state.stores.error);

const getStats = createSelector(getStatsState, (state: StatsState): IStats[] => state.stats.data);
const getStatsLoading = createSelector(getStatsState, (state: StatsState): boolean => state.stats.loading);
const getStatsError = createSelector(getStatsState, (state: StatsState): HttpErrorResponse | null => state.stats.error);

export const StatsSelector = {
  getStores,
  getStoresLoading,
  getStoresError,
  getStats,
  getStatsLoading,
  getStatsError,
};
