import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
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

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const router = inject(Router);
  const isLoggedin = inject(PermissionService).canActivate();
  if(!isLoggedin) {
    router.navigate(['/login'], { queryParams: { returnUrl: state.url }})
    return false;
  }
  return true;
};
