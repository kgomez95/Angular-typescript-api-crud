// Librerías.
import { Component } from '@angular/core';
import { Router } from '@angular/router';

// Importaciones de core.
import { AuthService } from '@core/services/auth.service';

// Importaciones de environments:
import { environment } from '@environments/environment';

@Component({
    selector: 'app-shared-navbar-authorized-top',
    templateUrl: '../pages/navbar-authorized-top.page.html'
})
export class NavbarAuthorizedTopComponent {

    public isCollapsed: boolean = true;
    public env: any;

    constructor(
        private authService: AuthService,
        private router: Router
    ) { 
        this.env = environment;
    }

    /**
     * @name logoff
     * @description Cierra la sesión actual y redirige al login.
     */
    public logoff(): void {
        this.authService.setLogin(undefined);
        this.router.navigate([environment.routes.auth.login]);
    }

}
