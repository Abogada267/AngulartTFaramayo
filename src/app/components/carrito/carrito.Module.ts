import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CarritoComponent } from '../carrito/carrito.component';

@NgModule({
  declarations: [
    CarritoComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
})
export class CarritoModule {}
