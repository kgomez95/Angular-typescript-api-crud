// Librerías.
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Importaciones de navbar-authorized.
import { NavbarAuthorizedTopComponent } from './components/navbar-authorized-top.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule
    ],
    declarations: [
        NavbarAuthorizedTopComponent
    ],
    exports: [
        NavbarAuthorizedTopComponent
    ]
})

export class NavbarAuthorizedModule { }
