// Librerías.
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// Importaciones de core.
import { UnauthorizedLayoutComponent } from './layouts/unauthorized/unauthorized-layout.component';
import { AuthorizedLayoutComponent } from './layouts/authorized/authorized-layout.component';
import { AuthGuardService } from './guards/auth-guard.service';
import { AuthService } from './services/auth.service';
import { AuthInterceptorService } from './interceptors/auth-interceptor.service';

// Importaciones de shared.
import { SharedModule } from '@shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        SharedModule,
        HttpClientModule
    ],
    declarations: [
        AuthorizedLayoutComponent,
        UnauthorizedLayoutComponent,
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptorService,
            multi: true
        },
        AuthGuardService,
        AuthService
    ],
    exports: []
})

export class CoreModule { }
