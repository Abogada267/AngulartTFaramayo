import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'validationErrors'
})
export class ValidationErrorsPipe implements PipeTransform {
  transform(errors: any): string {
  
    if (!errors) {
      return '';
    }

   
    const errorMessages = Object.values(errors).join(', ');

    return errorMessages;
  }
}


