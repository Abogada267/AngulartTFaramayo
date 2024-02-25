
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from 'redux';
import { deleteCarrito, deleteItemCarrito } from '../../../app/state/videoclub.actions';
import { AppStore } from '../../../app/state/videoclub.store';
import { CarritoService } from '../../core/services/carrito.service';
import { Carrito } from '../../interfaces/carrito';
import { Appstate } from '../../state/videoclub.state';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {

  carrito: Carrito[] = [];
  logueado: boolean = false;
  usuario: any;
  enviado: string = '';

  constructor(
    private carritoService: CarritoService,
    private router: Router,
    @Inject(AppStore) private store: Store<Appstate>
  ) {
    this.readState();

    store.subscribe(() => {
      console.log('CarritoComponent: cambió el estado del carrito', Date.now());
      this.readState();
    });
    const state: Appstate = this.store.getState();
    this.logueado = state.logueado;
  }

  readState() {
    const state: Appstate = this.store.getState();
    this.carrito = state.carrito;
    this.logueado = state.logueado;
    this.usuario = state.usuario;
  }

  ngOnInit(): void {
    if (!this.logueado) this.router.navigateByUrl('/error/Usuario no logueado');
  }

  borrarItemCarrito(index: number) {
    this.store.dispatch<any>(deleteItemCarrito(index));
  }

  borrarCarrito() {
    this.store.dispatch<any>(deleteCarrito());
  }

  calcularParcial(item: Carrito): number {
    let parcial: number = Number(item.pelicula.precio) * item.dias;

    return parcial;
  }

  calcularTotal(carrito: Carrito[]): number {
    let total: any = 0;
    carrito.forEach((item: any) => {
      total += item.dias * item.pelicula.precio;
    });

    return total;
  }

  enviar() {
    this.carritoService.enviarCarrito()
      .subscribe((carrito: Carrito) => {
        console.log(carrito);
        this.borrarCarrito();
        this.enviado = '-> CARRITO ENVIADO';
        setTimeout(() => {
          this.enviado = '';
          this.router.navigateByUrl('/listado');
        }, 2000);
      });
  }
}

export { Carrito };
