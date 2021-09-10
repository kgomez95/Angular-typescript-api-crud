// Librerías.
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Importaciones de employees.
import { EmployeesRoutingModule } from './employees-routing.module';
import { SearchComponent } from './components/search.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        EmployeesRoutingModule,
    ],
    declarations: [
        SearchComponent,
    ]
})

export class EmployeesModule { }
