// alta.module.ts

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AltaComponent } from './alta.component';

@NgModule({
  declarations: [
    AltaComponent,
  
  ],
  imports: [
    CommonModule,
    FormsModule, 
  ],
})
export class AltaModule { }
