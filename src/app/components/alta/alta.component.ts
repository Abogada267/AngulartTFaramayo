import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from 'redux';
import { Pelicula } from 'src/app/interfaces/pelicula';
import { ListadoService } from 'src/app/servicios/listado.service';
import { Appstate } from 'src/app/state/videoclub.state';
import { AppStore } from 'src/app/state/videoclub.store';

@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html',
  styleUrls: ['./alta.component.css']
})
export class AltaComponent implements OnInit {

  peliculas: Pelicula[] = []
  logueado:boolean = false
  actualizar:string|undefined = ''
  pidiendo:boolean = false;

  constructor(
    private listadoService: ListadoService, 
    private router:Router,
    @Inject(AppStore) private store: Store<Appstate>
  ) {
    const state:Appstate = this.store.getState()
    this.logueado = state.logueado   
  }

  ngOnInit(): void {
    if (!this.logueado) this.router.navigateByUrl('/error/Usuario no logueado')
    this.obtenerPeliculas()
  }

  getPeliculaInicial() {
    return {
      titulo: null,
      genero: null,
      year: null,
      precio: null,
      stock: null,
      foto: null
    }
  }

  pelicula: Pelicula = this.getPeliculaInicial()

  clearIngresoPelicula() {
    this.pelicula = this.getPeliculaInicial()
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

  /* -------- Servicio API RESTful : POST ---------- */
  guardarPelicula() {
    this.listadoService.guardarPelicula(this.pelicula)
      .subscribe((pelicula: Pelicula) => {
        console.log(pelicula)

        this.peliculas.push(pelicula)
        this.clearIngresoPelicula()
      })
  }

  /* -------- Servicio API RESTful : PUT ---------- */
  setActualizarPelicula(id:string|undefined) {
    this.actualizar = id

    //let index = this.peliculas.findIndex(pelicula => pelicula.id == id)
    let index = this.peliculas.findIndex(pelicula => pelicula.id == id)

    let pelicula = this.peliculas[index]

    this.pelicula.titulo = pelicula.titulo
    this.pelicula.genero = pelicula.genero
    this.pelicula.year = pelicula.year
    this.pelicula.precio = pelicula.precio
    this.pelicula.stock = pelicula.stock
    this.pelicula.foto = pelicula.foto
  }
  resetActualizarPelicula() {
    this.actualizar = ''
    this.clearIngresoPelicula()
  }
  getActualizarPelicula(id?:string) {
    return id? (this.actualizar == id? true : false) : (this.actualizar? true : false)
  }

  actualizarPelicula() {
    let id = this.actualizar

    this.listadoService.actualizarPelicula(this.pelicula, id)
      .subscribe((pelicula: Pelicula) => {
        console.log(pelicula)

        let index = this.peliculas.findIndex(peli => peli.id == pelicula.id)
        //this.peliculas.splice(index, 1, pelicula)
        this.peliculas.splice(index, 1, this.pelicula)

        this.resetActualizarPelicula()
      })
  }

  /* -------- Servicio API RESTful : DELETE ---------- */
  borrarPelicula(id:string|undefined) {
    console.log(id)
    this.listadoService.borrarPelicula(id)
      .subscribe((pelicula: Pelicula) => {
        //console.log(pelicula)
        let index = this.peliculas.findIndex(peli => peli.id == pelicula.id)
        this.peliculas.splice(index, 1)
      })
  }
}