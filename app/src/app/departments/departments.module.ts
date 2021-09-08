// Librerías.
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Importaciones de departments.
import { DepartmentsRoutingModule } from './departments-routing.module';
import { SearchComponent } from './components/search.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        DepartmentsRoutingModule,
    ],
    declarations: [
        SearchComponent,
    ]
})

export class DepartmentsModule { }
