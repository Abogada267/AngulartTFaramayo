import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDatepicker } from '@angular/material/datepicker';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProductsComponent } from '../../products.component';

@Component({
  selector: 'app-product-dialog',
  templateUrl: './product-dialog.component.html',
  styleUrls: ['./product-dialog.component.scss'],
})
export class ProductDialogComponent implements OnInit {
  productForm: FormGroup;
  @ViewChild('picker') datepicker: MatDatepicker<Date> | undefined;

  // Nueva propiedad para almacenar la cadena JSON
  productFormJson: string | undefined;

  constructor(
    private dialogRef: MatDialogRef<ProductDialogComponent>,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) private editingProduct?: ProductsComponent
  ) {
    this.productForm = this.formBuilder.group({
      name: [''],
      createdAt: [''],
    });

    // Convertir el objeto a cadena JSON y asignarlo a la propiedad
    this.productFormJson = JSON.stringify(this.productForm.value, null, 2);
  }

  openDatepicker() {
    if (this.datepicker) {
      this.datepicker.open();
    }
  }

  ngOnInit() {
    if (this.editingProduct) {
      this.productForm.patchValue(this.editingProduct);
      this.productFormJson = JSON.stringify(this.productForm.value, null, 2);
    }
  }

  onSave(): void {
    this.dialogRef.close(this.productForm.value);
  }
}
