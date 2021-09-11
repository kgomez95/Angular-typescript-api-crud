// Librerías.
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Importaciones de navbar-authorized.
import { DataTableComponent } from './components/datatable.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule
    ],
    declarations: [
        DataTableComponent
    ],
    exports: [
        DataTableComponent
    ]
})

export class DataTablesModule { }
