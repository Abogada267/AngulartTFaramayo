import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from '../register/register.component';

@NgModule({
  declarations: [
    RegisterComponent,
   
  ],
  imports: [
    CommonModule,
    FormsModule, 
    
  ],
})
export class RegisterModule {}
