// Librerías.
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importaciones de app.
import { AppComponent } from '@app/app.component';

// Importaciones de core.
import { UnauthorizedLayoutComponent } from '@core/layouts/unauthorized/unauthorized-layout.component';
import { AuthorizedLayoutComponent } from '@core/layouts/authorized/authorized-layout.component';
import { AuthGuardService } from '@core/guards/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: 'auth',
        component: UnauthorizedLayoutComponent,
        loadChildren: () => import('@app/auth/auth.module').then(m => m.AuthModule)
      },
      {
        path: 'departments',
        component: AuthorizedLayoutComponent,
        canActivate : [AuthGuardService],
        loadChildren: () => import('@app/departments/departments.module').then(m => m.DepartmentsModule)
      },
      {
        path: '',
        redirectTo: 'auth',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
