import { createReducer, on } from '@ngrx/store';
import { UiActions } from '../actions/ui.action';

export const uiFeatureKey = 'ui';

export interface UiState {
  isSidenavOpened: boolean;
}

export const initialState: UiState = {
  isSidenavOpened: true
};

export const UiReducer = createReducer(
  initialState,
  on(UiActions.toggleSidenav, state => ({ ...state, isSidenavOpened: !state.isSidenavOpened })),
);