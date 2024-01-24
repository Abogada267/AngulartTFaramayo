import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RxjsExampleComponent } from './rxjs-example.component';
@NgModule({
  declarations: [RxjsExampleComponent],
  imports: [CommonModule, MatProgressSpinnerModule],
  exports: [RxjsExampleComponent],
})
export class RxjsExampleModule {}