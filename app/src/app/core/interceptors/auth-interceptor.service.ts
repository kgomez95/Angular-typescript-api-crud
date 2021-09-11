// Librerías.
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

// Importaciones de core.
import { AuthService } from '@core/services/auth.service';
import { Login } from '@core/models/login.model';

// Importaciones de environments:
import { environment } from '@environments/environment';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

    constructor(
        private router: Router,
        private authService: AuthService
    ) { }

    /**
     * @name intercept
     * @description Interceptor de llamadas encargado de asignar el token bearer en las cabeceras y de controlar las respuestas de error 403 para redirigir al login.
     * @param req - Petición donde añadir el token.
     * @param next - Función donde añadir la función para controlar las respuestas de error (en este caso).
     * @returns Retorna la promesa de la llamada con la comprobación del código de estado 403.
     */
    public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // Cogemos el login del localStorage.
        let login: Login | undefined = this.authService.getLogin();
        let request: HttpRequest<any> = req;

        // Si hay token se lo asignamos en las cabeceras.
        if (login && login.token) {
            request = req.clone({
                setHeaders: {
                    authorization: `Bearer ${login.token}`
                }
            });
        }

        // Añadimos el control de errores. El estado 403 en nuestro servicio significa que el usuario no tiene acceso, por tanto suponemos que 
        // ha caducado su token, por tanto lo mandamos para la página de login.
        return next.handle(request).pipe(
            catchError((err: HttpErrorResponse) => {
                if (err.status === 403) {
                    this.authService.setLogin(undefined);
                    this.router.navigate([environment.routes.auth.login]);
                }
                return throwError(err);
            })
        );
    }

}
