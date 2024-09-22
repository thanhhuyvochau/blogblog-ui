import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import { authenticationReducer } from './authenticate.reducer';

export const stateFeatureKey = 'state';

export interface GlobalState {
  blogs?: any[];
  userProfile?: any;
}

export const reducers: ActionReducerMap<GlobalState> = {
  userProfile: authenticationReducer,
};

export const metaReducers: MetaReducer<GlobalState>[] = isDevMode() ? [] : [];
