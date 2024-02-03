import { Injectable } from '@angular/core';
import { delay, finalize, of } from 'rxjs';
import { LoadingService } from '../../../../core/services/loading.service';
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
    name: 'Auricular ',
    createdAt: new Date(),
    actions: 'nuevooo',
  },
];

@Injectable()
export class ProductsService {
  constructor(private loadingService: LoadingService) {}

  getProducts() {
    this.loadingService.setIsLoading(true);
    return of(products).pipe(
      delay(1500),
      finalize(() => this.loadingService.setIsLoading(false))
    );
  }

  createProduct(data: Product) {
    products = [...products, { ...data, id: products.length + 1 }];
    return this.getProducts();
  }

  deleteProductById(id: number) {
    products = products.filter((el) => el.id != id);
    return this.getProducts();
  }

  updateProductById(id: number, data: Product) {
    products = products.map((el) => (el.id === id ? { ...el, ...data } : el));
    return this.getProducts();
  }
}