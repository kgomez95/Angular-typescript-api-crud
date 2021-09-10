// Librerías.
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

// Importaciones de core.
import { AuthService } from '@core/services/auth.service';
import { ApiResponse } from '@core/models/api/api-response.model';
import { ApiError } from '@core/models/api/api-error.model';
import { Login } from '@core/models/login.model';

// Importaciones de environments:
import { environment } from '@environments/environment';

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
        private authService: AuthService,
        private router: Router
    ) {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', [Validators.required]]
        });

        if (this.authService.getLogin()) {
            // Redirigimos a la página de departments.
            this.router.navigate([environment.routes.departments.search]);
        }
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
                    // Almacena el login en el localStorage.
                    this.authService.setLogin(response.data);
                    this.sendingRequest = false;

                    // Redirigimos a la página de departments.
                    this.router.navigate([environment.routes.departments.search]);
                },
                (error: any) => {
                    console.error(error);

                    if (error.error && error.error.errors) this.errors = error.error.errors || [];
                    else this.errors = [{
                        code: 'UNKNOW',
                        message: error.message
                    }];
                    this.sendingRequest = false;
                }
            );
        }
        else {
            this.sendingRequest = false;
        }
    }

}
