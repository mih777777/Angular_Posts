import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators'

export interface User {
  email: string
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token: string = null

  constructor(private http: HttpClient) { }

  
  login(user: User): Observable<{token: string}>{
    return this.http.post<{token: string}>(`http://localhost:3000/api/auth/login`, user)
      .pipe(tap(
        ({token}) => {
          localStorage.setItem('auth-token', token)
          this.setToken(token)
        }
      ))
  }

  isAuthenticate(): boolean {
    return !!this.token
  }

  setToken(token: string) {
    this.token = token
  }

  getToken(): string{
    return this.token
  }

  logOut() {
    this.setToken(null)
    localStorage.clear()
  }


  register(user: User): Observable<User>{
    return this.http.post<User>(`http://localhost:3000/api/auth/register`, user)
  }

}
