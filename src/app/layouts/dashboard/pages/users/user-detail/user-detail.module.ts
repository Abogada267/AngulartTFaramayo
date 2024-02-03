// user-detail.module.ts
import { NgModule } from '@angular/core';
import { UserDetailComponent } from './user-detail.component';

@NgModule({
  declarations: [
    UserDetailComponent,
  ],
  exports: [
    UserDetailComponent,
  ],
})
export class UserDetailModule { }
