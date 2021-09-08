// Librerías.
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Importaciones de core.
import { UnauthorizedLayoutComponent } from './layouts/unauthorized/unauthorized-layout.component';
import { AuthorizedLayoutComponent } from './layouts/authorized/authorized-layout.component';

// Importaciones de shared.
import { SharedModule } from '@shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        SharedModule,
    ],
    declarations: [
        AuthorizedLayoutComponent,
        UnauthorizedLayoutComponent,
    ],
    exports: []
})

export class CoreModule { }
