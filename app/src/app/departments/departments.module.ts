// Librerías.
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Importaciones de departments.
import { DepartmentsRoutingModule } from './departments-routing.module';
import { SearchComponent } from './components/search.component';
import { CreateComponent } from './components/create.component';
import { SearchService } from './services/search.service';

// Importaciones de shared.
import { DataTablesModule } from '@shared/datatables/datatables.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        DepartmentsRoutingModule,
        DataTablesModule
    ],
    declarations: [
        SearchComponent,
        CreateComponent
    ],
    providers: [
        SearchService
    ]
})

export class DepartmentsModule { }
