import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepicker, MatDatepickerToggle } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { ProductDialogComponent } from './product-dialog.component';


@NgModule({
  declarations: [
 ProductDialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatDatepicker,
    MatDatepickerToggle,
    MatNativeDateModule, MatInputModule,
    ReactiveFormsModule,
    
    
    
  ],
  exports: [
    
  ],
})
export class ProductDialogModule {}
