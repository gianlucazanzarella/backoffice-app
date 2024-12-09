import { createFeatureSelector, createSelector } from '@ngrx/store';
import { uiFeatureKey, UiState } from '../reducers/ui.reducer';

const getUiState = createFeatureSelector<UiState>(uiFeatureKey);

const getIsSidenavOpened = createSelector(getUiState, (state: UiState): boolean => state.isSidenavOpened);
const getIsProgressVisible = createSelector(getUiState, (state: UiState): boolean => state.isProgressVisible);
const snackbarMessage = createSelector(getUiState, (state: UiState): { message: string; timestamp: number; } => state.snackbarMessage);


export const UiSelector = {
  getIsSidenavOpened,
  getIsProgressVisible,
  snackbarMessage
};
