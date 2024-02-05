import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { GridListDynamicExampleModule } from '../../grid-list-dynamic-example/grid-list-dynamic-example.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatGridListModule,
    GridListDynamicExampleModule,  
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]  
})
export class HomeModule { }
