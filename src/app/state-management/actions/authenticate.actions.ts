import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { SigninResponse } from '../../shared/models/signin-response';

export const AuthenticateActions = createActionGroup({
  source: 'Authenticate',
  events: {
    Logout: emptyProps(),
    Login: props<{ credentials: any }>(),
    'Login Successful': props<{ userInfo: SigninResponse }>(),
    'Login Failed': emptyProps(),
  },
});
