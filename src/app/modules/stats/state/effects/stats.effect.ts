import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { StatsActions } from '../actions/stats.action';
import { StatsService } from '../services/stats.service';


@Injectable()
export class StatsEffect {
  getStores$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StatsActions.getStores),
      switchMap(() =>
        this.statsService.getStores().pipe(
          map((stores) => StatsActions.getStoresSuccess({ stores })),
          catchError((error: HttpErrorResponse) => of(StatsActions.getStoresFailed({ error })))
        )
      )
    )
  );

  getStats$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StatsActions.getStats),
      switchMap((action) =>
        this.statsService.getStats(action.storeId).pipe(
          map((stats) => StatsActions.getStatsSuccess({ stats })),
          catchError((error: HttpErrorResponse) => of(StatsActions.getStatsFailed({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private statsService: StatsService
  ) { }
}
