import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from 'redux';
import { setLogin, setUser } from 'src/app/state/videoclub.actions';
import { Appstate } from 'src/app/state/videoclub.state';
import { AppStore } from 'src/app/state/videoclub.store';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  logueado:boolean = false
  isAdmin:boolean = false
  nombre:string = ''
  foto:string = ''

  constructor(
    private router:Router, 
    @Inject(AppStore) private store:Store<Appstate>
  ){
    this.readState()

    store.subscribe(() => {
      console.log('PanelComponent: cambió el estado del contador', Date.now())
      this.readState()
    })
  }

  readState() {
    const state:Appstate = this.store.getState()
    console.log(state)
    this.logueado = state.logueado
    this.isAdmin = state.usuario.isAdmin
    this.nombre = state.usuario.nombre
    this.foto = state.usuario.foto
  }

  ngOnInit(): void {
  }

  logout() {
    this.store.dispatch<any>(setLogin(false))  
    this.store.dispatch<any>(setUser({}))  

    this.router.navigateByUrl('/login')
  }
}
