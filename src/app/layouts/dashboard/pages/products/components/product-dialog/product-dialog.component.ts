import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-product-dialog',
  templateUrl: './product-dialog.component.html',
  styleUrls: ['./product-dialog.component.scss']
})
export class ProductDialogComponent {
  [key: string]: any;
  productForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.productForm = this.fb.group({
      name: [''],
      createdAt: ['']
    });
  }
}

@NgModule({
  declarations: [ProductDialogComponent],
  imports: [CommonModule, MatDialogModule, ReactiveFormsModule, MatFormFieldModule],
})
export class ProductDialogModule {}
