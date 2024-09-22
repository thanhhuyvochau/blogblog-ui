import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from '../constants/app';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  register(registerInfo: any) {
    return this.http.post<HttpClient>(API.REGISTER_URL, registerInfo);
  }

  signin(credentials: any) {
    return this.http.post<HttpClient>(API.SIGNIN_URL, credentials);
  }
}
