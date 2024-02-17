import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './layouts/auth/pages/login/login.component';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { NotFoundComponent } from './layouts/not-found/not-found.component';


const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    loadChildren: () =>
      import('../app/layouts/dashboard/dashboard.module').then((m) => m.DashboardModule
      ),
  },
  {
    path: 'auth/login',
    component: LoginComponent,
  },
 
  {
    path: '404',
    component: NotFoundComponent,
  },
  {
    path: '**',
    redirectTo: '/auth/login',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
