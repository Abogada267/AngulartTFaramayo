import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { catchError, delay, finalize } from 'rxjs/operators';
import { LoadingService } from '../../../../core/services/loading.service';
import { ProductDialogComponent } from './components/product-dialog/product-dialog.component';
import { Product } from './models';

let products: Product[] = [
  {
    id: 1,
    name: 'Malvina',
    createdAt: new Date(),
    actions: 'nuevo',
  },
  {
    id: 2,
    name: 'Graciela',
    createdAt: new Date(),
    actions: 'nuevoo',
  },
  {
    id: 3,
    name: 'Auricular',
    createdAt: new Date(),
    actions: 'nuevooo',
  },
];

@Injectable()
export class ProductsService {
  constructor(
    private loadingService: LoadingService,
    private dialog: MatDialog
  ) {}

  getProducts(): Observable<Product[]> {
    this.loadingService.setIsLoading(true);
    return of(products).pipe(
      delay(1500),
      finalize(() => this.loadingService.setIsLoading(false)),
      catchError((error) => {
        console.error('Error getting products:', error);
        return of([]);
      })
    );
  }

  openProductDialog(product?: Product): Observable<Product | undefined> {
    const dialogRef = this.dialog.open(ProductDialogComponent, {
      data: product,
    });

    return dialogRef.afterClosed();
  }

  createProduct(data: Product): Observable<Product[]> {
    products = [...products, { ...data, id: products.length + 1 }];
    return this.getProducts();
  }

  deleteProductById(id: number): Observable<Product[]> {
    products = products.filter((el) => el.id !== id);
    return this.getProducts();
  }

  updateProductById(id: number, data: Product): Observable<Product[]> {
    products = products.map((el) => (el.id === id ? { ...el, ...data } : el));
    return this.getProducts();
  }
}
