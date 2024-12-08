import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { IStore } from '../../../../shared/interfaces/store.interface';
import { IStats } from '../interfaces/stats.interface';

export enum StatsActionTypes {
  GET_STORES = '[Stats] get stores',
  GET_STORES_SUCCESS = '[Stats] get stores success',
  GET_STORES_FAILED = '[Stats] get stores failed',

  GET_STATS = '[Stats] get stats',
  GET_STATS_SUCCESS = '[Stats] get stats success',
  GET_STATS_FAILED = '[Stats] get stats failed',

}

const getStores = createAction(StatsActionTypes.GET_STORES);
const getStoresSuccess = createAction(StatsActionTypes.GET_STORES_SUCCESS, props<{ stores: IStore[]; }>());
const getStoresFailed = createAction(StatsActionTypes.GET_STORES_FAILED, props<{ error: HttpErrorResponse; }>());

const getStats = createAction(StatsActionTypes.GET_STATS, props<{ storeId: string; }>());
const getStatsSuccess = createAction(StatsActionTypes.GET_STATS_SUCCESS, props<{ stats: IStats[]; }>());
const getStatsFailed = createAction(StatsActionTypes.GET_STATS_FAILED, props<{ error: HttpErrorResponse; }>());



export const StatsActions = {
  getStores,
  getStoresSuccess,
  getStoresFailed,
  getStats,
  getStatsSuccess,
  getStatsFailed
};
