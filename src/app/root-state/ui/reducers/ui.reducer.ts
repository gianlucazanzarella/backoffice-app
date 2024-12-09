import { createReducer, on } from '@ngrx/store';
import { UiActions } from '../actions/ui.action';

export const uiFeatureKey = 'ui';

export interface UiState {
  isSidenavOpened: boolean;
  isProgressVisible: boolean;
  snackbarMessage: {
    message: string;
    timestamp: number;
  };
}

export const initialState: UiState = {
  isSidenavOpened: true,
  isProgressVisible: false,
  snackbarMessage: {
    message: '',
    timestamp: 0
  }
};

export const UiReducer = createReducer(
  initialState,
  on(UiActions.toggleSidenav, state => ({ ...state, isSidenavOpened: !state.isSidenavOpened })),
  on(UiActions.showProgress, (state, action) => ({ ...state, isProgressVisible: action.isVisible })),
  on(UiActions.toggleSnackbar, (state, { message, timestamp }) => ({
    ...state,
    snackbarMessage: { message, timestamp }
  })),
);