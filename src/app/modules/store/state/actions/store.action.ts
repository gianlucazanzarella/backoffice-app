import { createAction, props } from '@ngrx/store';
import { IStore, IStoreData } from '../../interfaces/store.interface';
import { HttpErrorResponse } from '@angular/common/http';
import { IProduct } from '../../interfaces/product.interface';
import { IStats } from '../../interfaces/stats.interface';

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

  GET_PRODUCT = '[Store] get product',
  GET_PRODUCT_SUCCESS = '[Store] get product success',
  GET_PRODUCT_FAILED = '[Store] get product failed',

  DELETE_PRODUCT = '[Store] delete product',
  DELETE_PRODUCT_SUCCESS = '[Store] delete product success',
  DELETE_PRODUCT_FAILED = '[Store] delete product failed',

  CREATE_PRODUCT = '[Store] create product',
  CREATE_PRODUCT_SUCCESS = '[Store] create product success',
  CREATE_PRODUCT_FAILED = '[Store] create product failed',

  GET_STATS = '[Store] get stats',
  GET_STATS_SUCCESS = '[Store] get stats success',
  GET_STATS_FAILED = '[Store] get stats failed',
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

const getProduct = createAction(StoreActionTypes.GET_PRODUCT, props<{ storeId: string; productId: string; }>());
const getProductSuccess = createAction(StoreActionTypes.GET_PRODUCT_SUCCESS, props<{ product: IProduct | null; }>());
const getProductFailed = createAction(StoreActionTypes.GET_PRODUCT_FAILED, props<{ error: HttpErrorResponse; }>());

const deleteProduct = createAction(StoreActionTypes.DELETE_PRODUCT, props<{ storeId: string; productId: string; }>());
const deleteProductSuccess = createAction(StoreActionTypes.DELETE_PRODUCT_SUCCESS, props<{ storeId: string; }>());
const deleteProductFailed = createAction(StoreActionTypes.DELETE_PRODUCT_FAILED, props<{ error: HttpErrorResponse; }>());

const createProduct = createAction(StoreActionTypes.CREATE_PRODUCT, props<{ storeId: string; product: IProduct; }>());
const createProductSuccess = createAction(StoreActionTypes.CREATE_PRODUCT_SUCCESS, props<{ storeId: string; }>());
const createProductFailed = createAction(StoreActionTypes.CREATE_PRODUCT_FAILED, props<{ error: HttpErrorResponse; }>());

const getStats = createAction(StoreActionTypes.GET_STATS, props<{ storeId: string; }>());
const getStatsSuccess = createAction(StoreActionTypes.GET_STATS_SUCCESS, props<{ stats: IStats[]; }>());
const getStatsFailed = createAction(StoreActionTypes.GET_STATS_FAILED, props<{ error: HttpErrorResponse; }>());

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
  getProduct,
  getProductFailed,
  getProductSuccess,
  deleteProduct,
  deleteProductSuccess,
  deleteProductFailed,
  createProduct,
  createProductSuccess,
  createProductFailed,
  getStats,
  getStatsSuccess,
  getStatsFailed
};
