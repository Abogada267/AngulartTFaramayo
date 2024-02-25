import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Store } from 'redux';
import { catchError } from 'rxjs';
import { Appstate } from '../../../../src/app/state/videoclub.state';
import { AppStore } from '../../../../src/app/state/videoclub.store';
import { Carrito } from '../../../app/components/carrito/carrito.component';
import { UtilService } from './util.service';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  url:string = ''

  constructor(
    private http: HttpClient,
    private utilService :  UtilService,
    @Inject(AppStore) private store: Store<Appstate>
  ) { 
    this.url = this.utilService.URL_BASE + '/carrito/'    
  }

  /* GET */
  obtenerCarrito() {
    return this.http.get<Carrito[]>(this.url).pipe(
      catchError(this.utilService.handleError)
    )
  }

  /* POST */
  enviarCarrito() {
    const state:Appstate = this.store.getState()
    return this.http.post<Carrito>(this.url, {usuario: state.usuario, carrito: state.carrito }, this.utilService.getHttpOptions()).pipe(
      catchError(this.utilService.handleError)
    )
  }
}