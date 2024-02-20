import { Component } from '@angular/core';
import { SomeService } from '../SomeService';


@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.scss'] 
})
export class TemplateDrivenFormsComponent {
constructor(private someService: SomeService) {
    // ...
  }
}
