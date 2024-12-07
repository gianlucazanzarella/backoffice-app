import { createAction, props } from '@ngrx/store';

export enum UiActionTypes {
  TOGGLE = '[Ui] toggle sidevav',
}

const toggleSidenav = createAction(UiActionTypes.TOGGLE);

export const UiActions = {
  toggleSidenav,
};
