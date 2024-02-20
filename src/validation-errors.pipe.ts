import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'validationErrors'
})
export class ValidationErrorsPipe implements PipeTransform {
  transform(errors: any): string[] {
  
  return Object.keys(errors).map(key => `${key}: ${errors[key]}`);
    }
  }

