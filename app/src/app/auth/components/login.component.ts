// Librerías.
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';

// Importaciones de core.
import { AuthService } from '@core/services/auth.service';
import { ApiResponse } from '@core/models/api/api-response.model';
import { ApiError } from '@core/models/api/api-error.model';
import { Login } from '@core/models/login.model';

@Component({
    selector: 'app-auth-login',
    templateUrl: '../pages/login.page.html'
})
export class LoginComponent implements OnInit {

    public loginForm: FormGroup;
    public sendingRequest: boolean = false;
    public errors: ApiError[] = [];
    private submitted: boolean = false;

    constructor(
        private titleService: Title,
        private formBuilder: FormBuilder,
        private authService: AuthService
    ) {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', [Validators.required]]
        });
    }

    ngOnInit(): void {
        this.titleService.setTitle('Inicio de sesión');
    }

    /**
     * @name form
     * @description Coge los controles del formulario de inicio de sesión.
     */
    public get form(): any {
        return this.loginForm.controls;
    }

    /**
     * @name isInvalidUsername
     * @description Comprueba si el nombre de usuario especificado en el formulario es válido o no.
     * @returns Retorna "true" si el nombre de usuario es inválido o "false" en caso de que sea válido.
     */
    public isInvalidUsername(): boolean {
        return (this.loginForm.controls.username.errors !== null && this.loginForm.controls.username.dirty)
            || (this.loginForm.controls.username.errors !== null && this.submitted);
    }

    /**
     * @name isInvalidPassword
     * @description Comprueba si la contraseña especificada en el formulario es válida o no.
     * @returns Retorna "true" si la contraseña es inválida o "false" en caso de que sea válida.
     */
    public isInvalidPassword(): boolean {
        return (this.loginForm.controls.password.errors !== null && this.loginForm.controls.password.dirty)
            || (this.loginForm.controls.password.errors !== null && this.submitted);
    }

    /**
     * @name doLogin
     * @description Llama al servicio de autenticación para identificarse en la aplicación.
     */
    public doLogin(): void {
        this.submitted = true;
        this.sendingRequest = true;
        this.errors = [];

        if (!this.loginForm.invalid) {
            this.authService.doLogin(this.loginForm.controls.username.value, this.loginForm.controls.password.value).subscribe(
                (response: ApiResponse<Login>) => {
                    console.log(response);

                    this.authService.setLogin(response.data);
                    this.sendingRequest = false;
                },
                (error: any) => {
                    console.error(error);

                    if (error.error) this.errors = error.error.errors || [];
                    console.log(this.errors);
                    this.sendingRequest = false;
                }
            );
        }
        else {
            this.sendingRequest = false;
        }
    }

}
