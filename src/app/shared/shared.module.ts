import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FullNamePipe } from './full-name.pipe';
import { RepetirDirective } from './repetir.directive';
import { ResaltadoDirective } from './resaltado.directive';

@NgModule({
  declarations: [FullNamePipe, ResaltadoDirective, RepetirDirective],
  imports: [CommonModule],
  exports: [FullNamePipe, ResaltadoDirective, RepetirDirective],
})
export class SharedModule {}