import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FullNamePipe } from '../../../../shared/full-name.pipe';
import { PipesComponent } from './pipes.component';


@NgModule({
  declarations: [PipesComponent],
  imports: [CommonModule, ],
  exports: [PipesComponent,FormsModule ],
  providers: [DatePipe, FullNamePipe],
})
export class PipesModule {}