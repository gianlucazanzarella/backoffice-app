import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { StoresActions } from '../actions/store.action';
import { StoreService } from '../services/store.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { UiActions } from '../../../../root-state/ui/actions/ui.action';
import { StoreSelector } from '../selectors/store.selector';

@Injectable()
export class StoreEffect {
  getStores$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StoresActions.getStores),
      switchMap(() =>
        this.storeService.getStores().pipe(
          map((stores) => StoresActions.getStoresSuccess({ stores })),
          catchError((error: HttpErrorResponse) => of(StoresActions.getStoresFailed({ error })))
        )
      )
    )
  );

  getStore$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StoresActions.getStore),
      switchMap((action) =>
        this.storeService.getStore(action.storeId).pipe(
          map((store) => StoresActions.getStoreSuccess({ store })),
          catchError((error: HttpErrorResponse) => of(StoresActions.getStoreFailed({ error })))
        )
      )
    )
  );

  getProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StoresActions.getProducts),
      switchMap((action) =>
        this.storeService.getProducts(action.storeId).pipe(
          map((products) => StoresActions.getProductsSuccess({ products })),
          catchError((error: HttpErrorResponse) => of(StoresActions.getProductsFailed({ error })))
        )
      )
    )
  );

  getProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StoresActions.getProduct),
      switchMap((action) =>
        this.storeService.getProduct(action.storeId, action.productId).pipe(
          map((product) => StoresActions.getProductSuccess({ product })),
          catchError((error: HttpErrorResponse) => of(StoresActions.getProductFailed({ error })))
        )
      )
    )
  );

  deleteProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StoresActions.deleteProduct),
      switchMap((action) =>
        this.storeService.deleteProduct(action.storeId, action.productId).pipe(
          map(() => StoresActions.deleteProductSuccess({ storeId: action.storeId })),
          catchError((error: HttpErrorResponse) => of(StoresActions.deleteProductFailed({ error })))
        )
      )
    )
  );

  deleteProductSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StoresActions.deleteProductSuccess),
      map((action) => StoresActions.getProducts({ storeId: action.storeId }))
    )
  );

  createProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StoresActions.createProduct),
      switchMap((action) =>
        this.storeService.createProduct(action.storeId, action.product).pipe(
          map(() => StoresActions.createProductSuccess({ storeId: action.storeId })),
          catchError((error: HttpErrorResponse) => of(StoresActions.createProductFailed({ error })))
        )
      )
    )
  );

  createProductSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StoresActions.createProductSuccess),
      map((action) => StoresActions.getProducts({ storeId: action.storeId }))
    )
  );

  showProgressOnStoresLoading$ = createEffect(() =>
    this.store.select(StoreSelector.getStoresLoading).pipe(
      map((isLoading) => UiActions.showProgress({ isVisible: isLoading }))
    )
  );

  getStats$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StoresActions.getStats),
      switchMap((action) =>
        this.storeService.getStats(action.storeId).pipe(
          map((stats) => StoresActions.getStatsSuccess({ stats })),
          catchError((error: HttpErrorResponse) => of(StoresActions.getStatsFailed({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private storeService: StoreService,
    private store: Store
  ) { }
}
