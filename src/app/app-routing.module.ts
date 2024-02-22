import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AltaComponent } from "../../src/app/components/alta/alta.component";
import { ListadoComponent } from '../app/components/listado/listado.component';
import { DashboardComponent } from '../app/layouts/dashboard/dashboard.component';
import { RegisterComponent } from '../app/layouts/dashboard/pages/register/register-listadealumnos.component';
import { LoginComponent } from '../app/pages/login/login.component';
import { AlquilerComponent } from './components/alquiler/alquiler.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { ErrorComponent } from './components/error/error.component';
import { InfoComponent } from './components/info/info.component';
import { WarningComponent } from './components/warning/warning.component';



const routes: Routes =
  [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'alta', component: AltaComponent },
  { path: 'alquiler', component: AlquilerComponent },
  { path: 'listado', component: ListadoComponent },
  { path: 'carrito', component: CarritoComponent },
  { path: 'info/:descripcion', component: InfoComponent },
  { path: 'warning/:descripcion', component: WarningComponent },
  { path: 'error/:descripcion', component: ErrorComponent },
        { path: '**', redirectTo: 'login' },
  {
    path: 'dashboard',
    component: DashboardComponent,
    loadChildren: () =>
      import('../app/layouts/dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: '**',
    redirectTo: '/login', 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,FormsModule],
})
export class AppRoutingModule {}
