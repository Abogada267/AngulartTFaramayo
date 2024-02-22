import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  URL_BASE: string = 'https://61a4e8fe4c822c0017041f9e.mockapi.io';

  getHttpOptions() {
    return {
      headers: new HttpHeaders({
        'content-type': 'application/json'
      })
    };
  }

  handleError(error: HttpErrorResponse) {
    /* Error Http FRONTEND */
    if (error.error instanceof ErrorEvent) {
      console.warn('Error de Frontend:', error.error.message);
    }
    /* Error Http BACKEND */
    else {
      console.warn(`Error de Backend: ${error.status}, cuerpo del error: ${error.message}`);
    }

    return throwError(() => 'Error de comunicación Http');
  }

  constructor() { }
}
