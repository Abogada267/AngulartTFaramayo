import { Injectable } from '@angular/core';
import { Route, Routes } from '@angular/router';
import { AlquilerComponent } from '../components/alquiler/alquiler.component';
import { AltaComponent } from '../components/alta/alta.component';
import { CarritoComponent } from '../components/carrito/carrito.component';
import { ErrorComponent } from '../components/error/error.component';
import { InfoComponent } from '../components/info/info.component';
import { ListadoComponent } from '../components/listado/listado.component';
import { LoginComponent } from '../components/login/login.component';
import { RegisterComponent } from '../components/register/register.component';
import { WarningComponent } from '../components/warning/warning.component';
import { DashboardComponent } from '../layouts/dashboard/dashboard.component';

@Injectable({
  providedIn: 'root',
})
export class
  Rutas {
  private: any
  routes:
    Routes = [
          {
        path: '',
        redirectTo: 'login', pathMatch: 'full' },
      {
        path: 'login', 
        component: LoginComponent
      },
  { path: 'register', component: RegisterComponent },
      {
        path: 'alta',
        component: AltaComponent
      },
  { path: 'alquiler', component: AlquilerComponent },
  { path: 'listado', component: ListadoComponent },
  { path: 'carrito', component: CarritoComponent },
      {
        path: 'info/:descripcion',
        component: InfoComponent
      },
  { path: 'warning/:descripcion', component: WarningComponent },
  { path: 'error/:descripcion', component: ErrorComponent },
  { path: 'dashboard', component: DashboardComponent, loadChildren: () => import('../layouts/dashboard/dashboard.module').then((m) => m.DashboardModule) },
   { path: '**', redirectTo: '/login' },
    ]
  static routes: Route[];
  
 public static getRoutes(): Route[] {
    return Rutas.routes;
  }
}