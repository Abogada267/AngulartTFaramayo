import { NgModule } from "@angular/core";
import { MatCard, MatCardModule } from '@angular/material/card';
import { ValidationErrorsPipe } from "../../../validation-errors.pipe";
import { LoginComponent } from "./login.component";


@NgModule({
    
declarations: [
LoginComponent,ValidationErrorsPipe,
 ],
  imports: [MatCardModule, MatCard],
})


export class LoginModule {}