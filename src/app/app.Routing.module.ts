import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Rutas } from './router/rutas';

@NgModule({
  imports: [RouterModule.forRoot(Rutas.getRoutes())],
  exports: [RouterModule],
})
export class AppRoutingModule {}

