// Librerías.
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importaciones de auth.
import { SearchComponent } from './components/search.component';

const routes: Routes = [
    {
        path: '',
        component: SearchComponent,
        data: { current: 'search' }
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
