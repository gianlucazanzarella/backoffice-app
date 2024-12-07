import { createAction, props } from '@ngrx/store';

export enum UiActionTypes {
  TOGGLE = '[Ui] toggle sidevav',
  SHOW_PROGRESS = '[Ui] show progress',
}

const toggleSidenav = createAction(UiActionTypes.TOGGLE);
const showProgress = createAction(UiActionTypes.SHOW_PROGRESS, props<{ isVisible: boolean; }>());

export const UiActions = {
  toggleSidenav,
  showProgress
};
