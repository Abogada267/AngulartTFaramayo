import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from 'redux';
import { CarritoService } from '../../../app/core/services/carrito.service';
import { Appstate } from '../../../app/state/videoclub.state';
import { AppStore } from '../../../app/state/videoclub.store';
import { Carrito } from '../carrito/carrito.component';

@Component({
  selector: 'app-alquiler',
  templateUrl: './alquiler.component.html',
  styleUrls: ['./alquiler.components.scss']
})
export class AlquilerComponent implements OnInit {

  carrito: any[] = []
  logueado:boolean = false
  totalAlquiler:number = 0
  pidiendo:boolean = false;

  constructor(
    private carritoService:CarritoService,
    private router:Router,
    @Inject(AppStore) private store: Store<Appstate>
  ) {
    const state:Appstate = this.store.getState()
    this.logueado = state.logueado   
  }

  ngOnInit(): void {
    if(!this.logueado) this.router.navigateByUrl('/error/Usuario no logueado')
    this.obtenerCarrito()
  }

  borrarItemCarrito(id:string|undefined) {
  }

  calcularParcial(item:Carrito) {
    let parcial:number = Number(item.pelicula.precio) * item.dias

    return parcial
  }

  calcularTotal(carrito:Carrito[]) {
    let total:any = 0
    carrito.forEach((item:any) => {
      let valor = item.dias * item.pelicula.precio
      total += valor
    });
    return total
  }

  calcularRecaudacion(carrito:Carrito[]) {
    let total:any = 0
    carrito.forEach((item:any) => {
      item.carrito.forEach((item:any) => {
        let valor = item.dias * item.pelicula.precio
        total += valor
      });
    });
    return total
  }

  obtenerCarrito() {
    this.pidiendo = true
    this.carritoService.obtenerCarrito()
    .subscribe((carrito: any[]) => {
      console.log(carrito)
      setTimeout(() => {
        this.carrito = carrito
        this.pidiendo = false
      },500)
    })
  }
}