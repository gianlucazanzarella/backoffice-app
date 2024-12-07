import { createFeatureSelector, createSelector } from '@ngrx/store';
import { uiFeatureKey, UiState } from '../reducers/ui.reducer';

const getUiState = createFeatureSelector<UiState>(uiFeatureKey);

const getIsSidenavOpened = createSelector(getUiState, (state: UiState): boolean => state.isSidenavOpened);

export const UiSelector = {
  getIsSidenavOpened
};
