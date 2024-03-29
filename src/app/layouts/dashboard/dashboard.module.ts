import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule, RouterOutlet } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './pages/Home/home.component';
import { CategoriesModule } from './pages/categories/categories.module';
import { PipesModule } from './pages/pipes/pipes.module';
import { RxjsExampleModule } from './pages/rxjs-example/rxjs-example.module';
import { RxjsIntroduccionModule } from './pages/rxjs-introduccion/rxjs-introduccion.module';
import { UserDetailComponent } from './pages/users/pages/user-detail/user-detail.component';
import { UsersComponent } from './pages/users/users.component';
import { UsersModule } from './pages/users/users.module';

@NgModule({
  declarations: [DashboardComponent, HomeComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    UsersModule,
    CategoriesModule,
    PipesModule,
    RxjsExampleModule,
    RxjsIntroduccionModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatDatepickerModule,
    FormsModule,
    RouterOutlet,
    RouterModule.forChild([
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'users',
        component: UsersComponent,
      },
      {
        path: 'products',
        loadChildren: () =>
          import('./pages/products/products.module').then(
            (m) => m.ProductsModule
          ),
      },
      {
        path: 'user/:id',
        component: UserDetailComponent,
      },
    ]),
  ],
})
export class DashboardModule {}



