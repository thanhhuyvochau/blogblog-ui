import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class JwtUtilService {
  constructor() {}

  /**
   * Decode JWT token to get payload.
   * @param token The JWT token to decode
   */
  decodeToken(token: string): any {
    try {
      return jwtDecode(token);
    } catch (error) {
      return null;
    }
  }

  /**
   * Check if the token is expired or not.
   * @param token The JWT token
   */
  isTokenExpired(token: string): boolean {
    const decodedToken = this.decodeToken(token);

    if (!decodedToken || !decodedToken.exp) {
      return true; // Invalid token or no expiration in the token
    }

    const expirationDate = decodedToken.exp * 1000; // Convert to milliseconds
    return Date.now() > expirationDate;
  }

  /**
   * Check if a JWT token is valid.
   * @param token The JWT token to validate
   */
  isTokenValid(token: string): boolean {
    if (!token) {
      return false; // No token provided
    }

    return !this.isTokenExpired(token);
  }
}
