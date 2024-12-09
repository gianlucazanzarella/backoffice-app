import { createAction, props } from '@ngrx/store';

export enum UiActionTypes {
  TOGGLE = '[Ui] toggle sidevav',
  SHOW_PROGRESS = '[Ui] show progress',
  TOGGLE_SNACKBAR = '[Ui] toggle snackbar',
}

const toggleSidenav = createAction(UiActionTypes.TOGGLE);
const showProgress = createAction(UiActionTypes.SHOW_PROGRESS, props<{ isVisible: boolean; }>());
const toggleSnackbar = createAction(UiActionTypes.TOGGLE_SNACKBAR, props<{ message: string; timestamp: number; }>());

export const UiActions = {
  toggleSidenav,
  showProgress,
  toggleSnackbar
};
