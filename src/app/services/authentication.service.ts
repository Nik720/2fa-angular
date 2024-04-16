import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private apiURL: string;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { 
    this.apiURL = environment.apiUrl;
  }

  isUserAuthenticated() {
    return false;
  }

  register(user: User) {
    return this.http.post(`${this.apiURL}/auth/register`, user);
  }
}
