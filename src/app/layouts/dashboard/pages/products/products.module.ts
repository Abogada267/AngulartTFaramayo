import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatTable } from '@angular/material/table';
import { SharedModule } from '../../../../shared/shared.module';
import { ProductDialogComponent } from './components/product-dialog/product-dialog.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductsService } from './products.service';


@NgModule({
  declarations: [ProductsComponent, ProductDialogComponent, ],
  imports: [CommonModule,  ProductsRoutingModule, MatIcon,
  MatTable,
  SharedModule,
  
  ],
  providers: [ProductsService],
})
export class ProductsModule {}