import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { LoginComponent } from './pages/login/login.component';


const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    loadChildren: () =>
      import("../dashboard/dashboard.module").then(
(m) => m.DashboardModule
      ),
  },
  {
    path: "auth/login",
    component: LoginComponent,
  },
  {
    path: "404",
    component: NotFoundComponent,
  },
  {
    path: "**",
    redirectTo: "/auth/login",
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}