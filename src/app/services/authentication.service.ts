import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private apiURL: string;
  private userSubject: BehaviorSubject<User | null>;
  public user: Observable<User | null>;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { 
    this.apiURL = environment.apiUrl;
    this.userSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('user')!));
    this.user = this.userSubject.asObservable();
  }

  register(user: User) {
    return this.http.post(`${this.apiURL}/auth/register`, user);
  }

  login(email: string, password: string) {
    return this.http.post(`${this.apiURL}/auth/login`, {email, password})
          .pipe(map((user: any) => {
            const currentUser = user['data'].user;
            localStorage.setItem('user', JSON.stringify(currentUser));
            this.userSubject.next(currentUser);
            return currentUser;
          }))
  }

  logout() {
    localStorage.removeItem('user');
    this.userSubject.next(null);
    this.router.navigate(['/login'])
  }

  public isUserAuthenticated() {
    return this.userSubject.value ? true : false;
  }

  public get userValue() {
    return this.userSubject.value;
  }


}
