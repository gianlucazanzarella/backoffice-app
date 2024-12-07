import { createAction, props } from '@ngrx/store';
import { IStore, IStoreData } from '../../interfaces/store.interface';
import { HttpErrorResponse } from '@angular/common/http';
import { IProduct } from '../../interfaces/product.interface';

export enum StoreActionTypes {
  GET_STORES = '[Store] get stores',
  GET_STORES_SUCCESS = '[Store] get stores success',
  GET_STORES_FAILED = '[Store] get stores failed',

  GET_STORE = '[Store] get store',
  GET_STORE_SUCCESS = '[Store] get store success',
  GET_STORE_FAILED = '[Store] get store failed',

  GET_PRODUCTS = '[Store] get products',
  GET_PRODUCTS_SUCCESS = '[Store] get products success',
  GET_PRODUCTS_FAILED = '[Store] get products failed',
}

const getStores = createAction(StoreActionTypes.GET_STORES);
const getStoresSuccess = createAction(StoreActionTypes.GET_STORES_SUCCESS, props<{ stores: IStore[]; }>());
const getStoresFailed = createAction(StoreActionTypes.GET_STORES_FAILED, props<{ error: HttpErrorResponse; }>());

const getStore = createAction(StoreActionTypes.GET_STORE, props<{ storeId: string; }>());
const getStoreSuccess = createAction(StoreActionTypes.GET_STORE_SUCCESS, props<{ store: IStoreData | null; }>());
const getStoreFailed = createAction(StoreActionTypes.GET_STORE_FAILED, props<{ error: HttpErrorResponse; }>());

const getProducts = createAction(StoreActionTypes.GET_PRODUCTS, props<{ storeId: string; }>());
const getProductsSuccess = createAction(StoreActionTypes.GET_PRODUCTS_SUCCESS, props<{ products: IProduct[]; }>());
const getProductsFailed = createAction(StoreActionTypes.GET_PRODUCTS_FAILED, props<{ error: HttpErrorResponse; }>());

export const StoresActions = {
  getStores,
  getStoresSuccess,
  getStoresFailed,
  getStore,
  getStoreSuccess,
  getStoreFailed,
  getProducts,
  getProductsSuccess,
  getProductsFailed,
};
