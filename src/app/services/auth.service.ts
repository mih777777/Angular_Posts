import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface User {
  email: string
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  register(user: User): Observable<User>{
    return this.http.post<User>(`http://localhost:3000/api/auth/register`, user)
  }

  login() {

  }

  isAuthenticate() {

  }

  setToken() {

  }

  getToken() {

  }

  logOut() {

  }

}
