import {Injectable} from '@angular/core'
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router'
import {environment} from '../../environments/environment'

@Injectable()
export class AuthGuard implements CanActivate {
  constructor() {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return !!localStorage.getItem(environment.token)
  }
}
