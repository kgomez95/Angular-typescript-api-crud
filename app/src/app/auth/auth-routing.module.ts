// Librerías.
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importaciones de auth.
import { LoginComponent } from './components/login.component';

const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
        data: { current: 'login' }
    },
    {
      path: '',
      redirectTo: 'login',
      pathMatch: 'full'
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

export class AuthRoutingModule { }
