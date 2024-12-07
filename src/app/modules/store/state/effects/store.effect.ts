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

  showProgressOnStoresLoading$ = createEffect(() =>
    this.store.select(StoreSelector.getStoresLoading).pipe(
      map((isLoading) => UiActions.showProgress({ isVisible: isLoading }))
    )
  );

  constructor(
    private actions$: Actions,
    private storeService: StoreService,
    private store: Store
  ) { }
}
