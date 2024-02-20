import { CommonModule, registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
import esAR from '@angular/common/locales/es-AR';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepicker, MatDatepickerModule, MatDatepickerToggleIcon } from '@angular/material/datepicker';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { RouterOutlet } from '@angular/router';
import { SomeService } from '../app/components/SomeService';
import { LoginComponent } from '../app/pages/login/login.component';
import { ValidationErrorsPipe } from "../validation-errors.pipe";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';
import { TemplateDrivenFormsComponent } from './components/template-driven-forms/template-driven-forms.component';
import { MY_USER_TOKEN } from './core/injection-tokens';
import { SharedModule } from "./shared/shared.module";

registerLocaleData(es);
registerLocaleData(esAR);

@NgModule({
  declarations: [AppComponent,  ReactiveFormsComponent, TemplateDrivenFormsComponent, LoginComponent,ValidationErrorsPipe],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatProgressSpinnerModule,
    RouterOutlet,
    AppRoutingModule,
    MatFormFieldModule,
    SharedModule,
    MatDatepicker,
    MatDatepickerToggleIcon,
    MatCard,

    

  ],
  providers: [
  SomeService, 
    {
      provide: LOCALE_ID,
      useValue: 'es-AR',
    },
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: {
        appearance: 'outline',
      },
    },
    {
      provide: MY_USER_TOKEN,
      useValue: 'ldsjdm348342kjewkjksfdmsakjdsad',
    },
    {
      provide: 'API_URL',
      useValue: 'http://localhost:5000/',
    },
    provideAnimationsAsync(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

