import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import es from '@angular/common/locales/es';
import esAR from '@angular/common/locales/es-AR';
import { LOCALE_ID, NgModule, isDevMode } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ValidationErrorsPipe } from '../../src/validation-errors.pipe';
import { AppRoutingModule } from './app.Routing.module';
import { AppComponent } from './app.component';
import { AlquilerComponent } from './components/alquiler/alquiler.component';
import { AltaComponent } from './components/alta/alta.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { ErrorComponent } from './components/error/error.component';
import { InfoComponent } from './components/info/info.component';
import { ListadoComponent } from './components/listado/listado.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';
import { RegisterComponent } from './components/register/register.component';
import { TemplateDrivenFormsComponent } from './components/template-driven-forms/template-driven-forms.component';
import { WarningComponent } from './components/warning/warning.component';
import { appReducers } from './core/store';
import { Routes } from './router/rutas';
import { SharedModule } from './shared/shared.module';
import { appStoreProviders } from './state/videoclub.store';

registerLocaleData(es);
registerLocaleData(esAR);

@NgModule({
  declarations: [
    AppComponent,
    AltaComponent,
    ListadoComponent,
    CarritoComponent,
    NavbarComponent,
    LoginComponent,
    ErrorComponent,
    RegisterComponent,
    InfoComponent,
    WarningComponent,
    AlquilerComponent,
    ReactiveFormsComponent,
    TemplateDrivenFormsComponent,
    ValidationErrorsPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatProgressSpinnerModule,
    MatCardModule,
    SharedModule,
    RouterModule.forRoot(Routes.getRoutes()),
    StoreModule.forRoot(appReducers, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([]),
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es-AR',
    },
    {
      provide: 'API_URL',
      useValue: 'http://localhost:5000/',
    },
    appStoreProviders,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}








