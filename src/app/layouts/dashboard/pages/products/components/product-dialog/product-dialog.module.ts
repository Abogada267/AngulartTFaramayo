import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepicker, MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ProductDialogComponent } from './product-dialog.component';

@NgModule({
  declarations: [ProductDialogComponent],
  imports: [CommonModule, MatDialogModule, ReactiveFormsModule, MatFormFieldModule,
    MatDatepicker,
    MatDatepickerModule,
   MatDialogModule,
  ],
  exports: [ProductDialogComponent],
})
export class ProductDialogModule {}
