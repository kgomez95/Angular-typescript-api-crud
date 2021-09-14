// Librerías.
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importaciones de departments.
import { SearchComponent } from './components/search.component';
import { CreateComponent } from './components/create.component';

const routes: Routes = [
    {
        path: '',
        component: SearchComponent,
        data: { current: 'search' }
    },
    {
        path: 'create',
        component: CreateComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class DepartmentsRoutingModule { }
