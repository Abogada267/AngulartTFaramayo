import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { FullNamePipe } from './full-name.pipe';
import { RepetirDirective } from './repetir.directive';
import { ResaltadoDirective } from './resaltado.directive';

@NgModule({
  declarations: [FullNamePipe, ResaltadoDirective, RepetirDirective, ], 
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
    MatInputModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatCardModule,
    FormsModule,
    
   
    
        
  ],
})
export class SharedModule {}
