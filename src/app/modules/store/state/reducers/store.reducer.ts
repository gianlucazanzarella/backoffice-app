import { createReducer, on } from '@ngrx/store';
import { IStore, IStoreData } from '../../interfaces/store.interface';
import { StoresActions } from '../actions/store.action';
import { HttpErrorResponse } from '@angular/common/http';
import { IProduct } from '../../interfaces/product.interface';

export const storeFeatureKey = 'store';

export interface StoreState {
  stores: {
    data: IStore[];
    loading: boolean;
    error: HttpErrorResponse | null;
  };
  store: {
    data: IStoreData | null;
    loading: boolean;
    error: HttpErrorResponse | null;
  };
  products: {
    data: IProduct[];
    loading: boolean;
    error: HttpErrorResponse | null;
  };
  deleteProduct: {
    loading: boolean;
    error: HttpErrorResponse | null;
  };
}

export const initialState: StoreState = {
  stores: {
    data: [],
    loading: false,
    error: null,
  },
  store: {
    data: null,
    loading: false,
    error: null,
  },
  products: {
    data: [],
    loading: false,
    error: null,
  },
  deleteProduct: {
    loading: false,
    error: null,
  }
};

export const StoreReducer = createReducer(
  initialState,
  on(StoresActions.getStores, state => ({
    ...state,
    stores: {
      ...state.stores,
      data: [],
      loading: true,
      error: null
    }
  })),
  on(StoresActions.getStoresSuccess, (state, action) => ({
    ...state,
    stores: {
      ...state.stores,
      data: action.stores,
      loading: false,
      error: null
    }
  })),
  on(StoresActions.getStoresFailed, (state, action) => ({
    ...state,
    stores: {
      ...state.stores,
      data: [],
      loading: false,
      error: action.error
    }
  })),
  on(StoresActions.getStore, state => ({
    ...state,
    store: {
      ...state.store,
      data: null,
      loading: true,
      error: null
    }
  })),
  on(StoresActions.getStoreSuccess, (state, action) => ({
    ...state,
    store: {
      ...state.store,
      data: action.store,
      loading: false,
      error: null
    }
  })),
  on(StoresActions.getStoreFailed, (state, action) => ({
    ...state,
    store: {
      ...state.store,
      data: null,
      loading: false,
      error: action.error
    }
  })),
  on(StoresActions.getProducts, state => ({
    ...state,
    products: {
      ...state.products,
      data: [],
      loading: true,
      error: null
    }
  })),
  on(StoresActions.getProductsSuccess, (state, action) => ({
    ...state,
    products: {
      ...state.products,
      data: action.products,
      loading: false,
      error: null
    }
  })),
  on(StoresActions.getProductsFailed, (state, action) => ({
    ...state,
    products: {
      ...state.products,
      data: [],
      loading: false,
      error: action.error
    }
  })),
  on(StoresActions.deleteProduct, state => ({
    ...state,
    deleteProduct: {
      ...state.deleteProduct,
      loading: true,
      error: null
    }
  })),
  on(StoresActions.deleteProductSuccess, (state, action) => ({
    ...state,
    deleteProduct: {
      ...state.deleteProduct,
      loading: false,
      error: null
    }
  })),
  on(StoresActions.deleteProductFailed, (state, action) => ({
    ...state,
    deleteProduct: {
      ...state.deleteProduct,
      loading: false,
      error: action.error
    }
  })),
);