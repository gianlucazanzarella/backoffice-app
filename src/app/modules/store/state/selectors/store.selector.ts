import { createFeatureSelector, createSelector } from '@ngrx/store';
import { storeFeatureKey, StoreState } from '../reducers/store.reducer';
import { IStore, IStoreData } from '../../interfaces/store.interface';
import { HttpErrorResponse } from '@angular/common/http';
import { IProduct } from '../../interfaces/product.interface';

const getStoreState = createFeatureSelector<StoreState>(storeFeatureKey);

const getStores = createSelector(getStoreState, (state: StoreState): IStore[] => state.stores.data);
const getStoresLoading = createSelector(getStoreState, (state: StoreState): boolean => state.stores.loading);
const getStoresError = createSelector(getStoreState, (state: StoreState): HttpErrorResponse | null => state.stores.error);

const getStore = createSelector(getStoreState, (state: StoreState): IStoreData | null => state.store.data);
const getStoreLoading = createSelector(getStoreState, (state: StoreState): boolean => state.store.loading);
const getStoreError = createSelector(getStoreState, (state: StoreState): HttpErrorResponse | null => state.store.error);

const getProducts = createSelector(getStoreState, (state: StoreState): IProduct[] => state.products.data);
const getProductsLoading = createSelector(getStoreState, (state: StoreState): boolean => state.products.loading);
const getProductsError = createSelector(getStoreState, (state: StoreState): HttpErrorResponse | null => state.products.error);

export const StoreSelector = {
  getStores,
  getStoresLoading,
  getStoresError,
  getStore,
  getStoreLoading,
  getStoreError,
  getProducts,
  getProductsLoading,
  getProductsError
};
