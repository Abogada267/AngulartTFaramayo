import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { adminGuard } from '../../core/guards/admin.guard';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { HomeComponent } from './pages/Home/home.component';
import { CategoriesModule } from './pages/categories/categories.module';
import { RxjsExampleModule } from './pages/rxjs-example/rxjs-example.module';
import { RxjsIntroduccionModule } from './pages/rxjs-introduccion/rxjs-introduccion.module';
import { UsersModule } from './pages/users/users.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    UsersModule,
    CategoriesModule,
    MatListModule,
    RouterModule,
    RxjsExampleModule,
    RxjsIntroduccionModule,

    RouterModule.forChild([
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'users',
        canActivate: [adminGuard],
        loadChildren: () =>
          import("./pages/users/users.module").then((m) => m.UsersModule),
      },
      {
        path: 'products',
        loadChildren: () =>
          import("./pages/products/products.module").then((m) => m.ProductsModule),
      },
      {
        path: 'user/:id',
        loadChildren: () =>
          import("./pages/users/user-detail/user-detail.module").then((m) => m.UserDetailModule),
      },
      {
        path: '**',
        redirectTo: 'home',
      },
    ]),
  ],
  exports: [DashboardComponent],
})
export class DashboardModule {}


