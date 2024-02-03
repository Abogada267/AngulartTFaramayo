import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { FullNamePipe } from '../../shared/full-name.pipe';
import { RepetirDirective } from '../../shared/repetir.directive';
import { ResaltadoDirective } from '../../shared/resaltado.directive';
@NgModule({
  declarations: [FullNamePipe, ResaltadoDirective, RepetirDirective],
  imports: [CommonModule],
  exports: [
    FullNamePipe,
    ResaltadoDirective,
    RepetirDirective,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDatepickerModule,
  ],
})
export class StudentsModule {}
