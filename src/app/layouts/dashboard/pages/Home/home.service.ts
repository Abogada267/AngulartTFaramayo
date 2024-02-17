import { Injectable } from '@angular/core';
import { delay, finalize, of } from 'rxjs';
import { LoadingService } from '../../../../core/services/loading.service';
import { Home } from './models';

let home: Home [] = [
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

  getHome() {
    this.loadingService.setIsLoading(true);
    return of(home).pipe(
      delay(1500),
      finalize(() => this.loadingService.setIsLoading(false))
    );
  }

  createProduct(data: Home) {
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