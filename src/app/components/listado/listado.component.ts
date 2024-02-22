import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from 'redux';
import { Carrito } from 'src/app/interfaces/carrito';
import { Pelicula } from 'src/app/interfaces/pelicula';
import { CarritoService } from 'src/app/servicios/carrito.service';
import { ListadoService } from 'src/app/servicios/listado.service';
import { addCarrito } from 'src/app/state/videoclub.actions';
import { Appstate } from 'src/app/state/videoclub.state';
import { AppStore } from 'src/app/state/videoclub.store';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  peliculas: Pelicula[] = []
  carrito: Carrito[] = []
  logueado:boolean = false
  pidiendo:boolean = false;
  agregada:string = ''
  alquileres: any[] = []


  constructor(
    private listadoService: ListadoService, 
    private carritoService: CarritoService, 
    private router:Router,
    @Inject(AppStore) private store: Store<Appstate>
  ) {
    const state:Appstate = this.store.getState()
    this.logueado = state.logueado   
  }

  ngOnInit(): void {
    if (!this.logueado) this.router.navigateByUrl('/error/Usuario no logueado')
    else {
      this.obtenerPeliculas()
      this.obtenerCarrito()
      this.obtenerAlquileres()
    }
  }

  /* -------- Servicio API RESTful : GET ---------- */
  obtenerCarrito() {
    const state:Appstate = this.store.getState()
    this.carrito = state.carrito
  }

  /* -------- Servicio API RESTful : GET ---------- */
  obtenerPeliculas() {
    this.pidiendo = true
    this.listadoService.obtenerPeliculas()
      .subscribe((peliculas: Pelicula[]) => {
        console.log(peliculas)
        setTimeout(() => {
          this.peliculas = peliculas
          this.pidiendo = false
        },500)
      })
  }

  agregarCarrito(id:string|undefined) {
    this.agregada = ' -> PELÍCULA AGREGADA'
    
    let pelicula:any = this.peliculas.find(pelicula => pelicula.id == id)
    this.store.dispatch<any>(addCarrito(pelicula))    
    
    setTimeout(() => {
      this.agregada = ''
      this.router.navigateByUrl('/carrito')
    },1000)
  }

  obtenerAlquileres() {
    this.pidiendo = true
    this.carritoService.obtenerCarrito()
    .subscribe((alquileres: any[]) => {
      console.log(alquileres)
      setTimeout(() => {
        this.alquileres = alquileres
        this.pidiendo = false
      },500)
    })
  }

  calcularDisponibles(stock:number|null, id:string|undefined) {
    //console.log(this.alquileres)
    let cantidadAlquilada = 0
    this.alquileres.forEach(alquiler => {
      alquiler.carrito.forEach( (item:any) => {
        console.log(item,id)
        console.log(item.pelicula.id,id)
        if(item.pelicula.id == id) {
          cantidadAlquilada++
        }
      })
    })
    return stock? stock - cantidadAlquilada : 0
  }
}
