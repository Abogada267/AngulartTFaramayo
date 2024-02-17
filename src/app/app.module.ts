import { CommonModule, registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
import esAR from '@angular/common/locales/es-AR';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepicker } from '@angular/material/datepicker';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from './app.component';
import { MY_USER_TOKEN } from './core/injection-tokens';


registerLocaleData(es);
registerLocaleData(esAR);

@NgModule({
  declarations: [AppComponent],
  imports: [
    FormsModule,
   BrowserModule,
    AppRoutingModule,BrowserAnimationsModule,
    MatNativeDateModule,
    MatProgressSpinnerModule,
    RouterModule,
    FormsModule,
    MatProgressSpinnerModule,
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButton,
    MatDatepicker,
    MatCard,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatIconModule,
  
  
  RouterOutlet,
    
 
   
      ],
  providers: [
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
