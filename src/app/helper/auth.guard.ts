import { Injectable, inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root',
})
class PermissionService {
  canActivate(): boolean {
    const authenticationService = inject(AuthenticationService);
    return authenticationService.isUserAuthenticated();
  }
}

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);
  const isLoggedin = inject(PermissionService).canActivate();
  if(!isLoggedin) {
    router.navigate(['/login'])
    return false;
  }
  return true;
};
