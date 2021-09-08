// Librerías.
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

// Importaciones de core.
import { AuthService } from '@core/services/auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {

    constructor(
        private router: Router,
        private authService: AuthService
    ) { }

    /**
     * @name canActivate
     * @description Comprueba si el usuario está identificado o no para entrar en la página solicitada.
     * @param route - Página solicitada.
     * @param state - Estado del router.
     * @returns Retorna "true" en caso de estar autorizado o "false" en caso de no estar autorizado.
     */
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if (!this.authService.isAuthenticated) {
            // Si el usuario no está autenticado denegamos su acceso y lo redirigimos a la pantalla de autenticación.
            this.router.navigate(['auth']);
            return false;
        }
        return true;
    }

}
