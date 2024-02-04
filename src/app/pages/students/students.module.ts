// Import statements for Angular and Angular Material modules
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDrawerContainer } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { FullNamePipe } from '../../shared/full-name.pipe';
import { RepetirDirective } from '../../shared/repetir.directive';
import { ResaltadoDirective } from '../../shared/resaltado.directive';
@NgModule({
 
  declarations: [
    FullNamePipe,
    ResaltadoDirective,
    RepetirDirective,
    MatDrawerContainer
  ],
    imports: [CommonModule],
  
  exports: [
    FullNamePipe,
    ResaltadoDirective,
    RepetirDirective,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatDrawerContainer
  ],
})
export class SharedModule {}
