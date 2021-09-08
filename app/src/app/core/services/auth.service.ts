// Librerías.
import { Injectable } from '@angular/core';

// Importaciones de core.
import { Login } from '@core/models/login.model';

@Injectable()
export class AuthService {
    private _isAuthenticated: boolean = false;
    private login?: Login;

    constructor() { }

    /**
     * @name isAuthenticated
     * @description Indica si el usuario está autenticado o no.
     */
    public get isAuthenticated(): boolean {
        return this._isAuthenticated;
    }

}
