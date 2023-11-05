
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivateChild {
    constructor(private router: Router, private authService: AuthService) { }
    // canActivate(route: ActivatedRouteSnapshot,  state: RouterStateSnapshot): boolean | Promise<boolean> {
    //   const isAuthenticated = this.authService.isAuthenticate();
    //     if (!isAuthenticated) {
    //         this.router.navigate(['/login']);
    //     }
    //     return isAuthenticated;
    // }

    canActivateChild(route: ActivatedRouteSnapshot,  state: RouterStateSnapshot): boolean | Promise<boolean> {
      const isAuthenticated = this.authService.isAuthenticate();
      if (!isAuthenticated) {
          this.router.navigate(['/login']);
      }
      return isAuthenticated;
  }



}
