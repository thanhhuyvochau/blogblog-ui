import { createReducer, on } from '@ngrx/store';
import { AuthenticateActions } from '../actions/authenticate.actions';

export const authenticateFeatureKey = 'authenticate';

export interface State {
  email: string;
  firstName: string;
  lastName: string;
  permissions: any[];
}

export const initialState: State = {
  email: '',
  firstName: '',
  lastName: '',
  permissions: [],
};

export const authenticationReducer = createReducer(
  initialState,
  on(AuthenticateActions.loginSuccessful, (state, payload) => {
    let userInfo = payload.userInfo;
    localStorage.setItem('user_profile', JSON.stringify(userInfo));
    return { ...userInfo };
  }),
);
