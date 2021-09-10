// Librerías.
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Importaciones de core.
import { Login } from '@core/models/login.model';
import { ApiRequest } from '@core/models/api/api-request.model';

// Importaciones de environments:
import { environment } from '@environments/environment';

@Injectable()
export class AuthService {
    private _isAuthenticated: boolean = false;
    private login?: Login;

    constructor(
        private httpClient: HttpClient
    ) {
        this.getLogin();
    }

    /**
     * @name doLogin
     * @description Llama al servicio para iniciar sesión.
     * @param username - Nombre de usuario.
     * @param password - Contraseña del usuario.
     * @returns Retorna la promesa de la llamada al servicio para gestionarla como sea oportuno.
     */
    public doLogin(username: string, password: string): Observable<any> {
        let headers: any = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        };
        let body: ApiRequest<any> = {
            data: {
                username,
                password
            }
        };

        return this.httpClient.post<any>(
            // Url base + acción.
            environment.api.baseUrl + environment.api.loginAction,
            body,
            { headers }
        );
    }

    /**
     * @name setLogin
     * @description Guarda los datos del usuario: Si el usuario está vacío borra los datos, y si tiene valor guarda sus datos.
     * @param login - Datos del usuario.
     */
    public setLogin(login?: Login): void {
        this.login = login;
        this._isAuthenticated = this.login !== undefined;

        if (this._isAuthenticated)
            localStorage.setItem(environment.localStorage.login, JSON.stringify(this.login));
        else
            localStorage.removeItem(environment.localStorage.login);
    }

    /**
     * @name getLogin
     * @description Si no hay login lo busca en el localStorage para intentar cargarlo.
     * @returns Retorna el login o undefined.
     */
    public getLogin(): Login | undefined {
        if (!this.login) {
            let loginValue = localStorage.getItem(environment.localStorage.login);
            if (loginValue) {
                this.setLogin(JSON.parse(loginValue));
            }
        }
        return this.login;
    }

    /**
     * @name isAuthenticated (get)
     * @description Indica si el usuario está autenticado o no.
     */
    public get isAuthenticated(): boolean {
        this.getLogin();
        return this._isAuthenticated;
    }

    /**
     * @name isAuthenticated (set)
     * @description Asigna si el usuario está autenticado o no.
     */
    public set isAuthenticated(_isAuthenticated: boolean) {
        this._isAuthenticated = _isAuthenticated;
    }

    // TODO: Crear un interceptor de llamadas para indicar el token bearer en la petición.
    // TODO: Crear un interceptor de respuestas de error 403 para saber si se ha caducado el token para enviar al usuario al login.

}
