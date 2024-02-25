import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';

@NgModule({
  declarations: [
       
  ],
  imports: [
    FormsModule,
    MatLabel,
    MatIcon,
    MatError,
    MatFormField,
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardTitle,
    MatIcon,
    FormsModule,
  ]
})
export class LoginModule {}
