// Librerías.
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Importaciones de auth.
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AuthRoutingModule,
    ],
    declarations: [
        LoginComponent,
    ]
})

export class AuthModule { }
