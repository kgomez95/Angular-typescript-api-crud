// Librerías.
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Importaciones de shared.
import { NavbarAuthorizedModule } from '@shared/navbar-authorized/navbar-authorized.module';

@NgModule({
    imports: [
        RouterModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        NavbarAuthorizedModule
    ],
    exports: [
        NavbarAuthorizedModule
    ]
})
export class SharedModule { }
