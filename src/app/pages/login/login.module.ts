import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { MatCard, MatCardModule } from '@angular/material/card';
import { ValidationErrorsPipe } from "../../../validation-errors.pipe";
import { LoginComponent } from "./login.component";


@NgModule({
    
declarations: [
LoginComponent,ValidationErrorsPipe,
 ],
  imports: [MatCardModule, MatCard,FormsModule],
})


export class LoginModule {}