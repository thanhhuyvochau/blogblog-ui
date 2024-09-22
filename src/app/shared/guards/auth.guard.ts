import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { JwtUtilService } from '../services/jwt-util.service';

export const authGuard: CanActivateFn = (route, state) => {
  const token = localStorage.getItem('access_token'); // Get token from storage

  if (token && inject(JwtUtilService).isTokenValid(token)) {
    inject(Router).navigate(['/home']);
    return false; // Prevent access to the route (e.g., "signin" or "signup")
  }
  return true;
};
