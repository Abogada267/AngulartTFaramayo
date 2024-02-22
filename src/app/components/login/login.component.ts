import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from 'redux';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { setLogin, setUser } from 'src/app/state/videoclub.actions';
import { Appstate } from 'src/app/state/videoclub.state';
import { AppStore } from 'src/app/state/videoclub.store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: Usuario = {
    email: '',
    password: '',
    isAdmin: false
  }

  logueado:boolean = false

  constructor(
    private router: Router,
    private usuarioService: UsuarioService,
    @Inject(AppStore) private store: Store<Appstate>
  ) {
    const state:Appstate = this.store.getState()
    this.logueado = state.logueado    
  }

  ngOnInit(): void {
    if (this.logueado) this.router.navigateByUrl('/warning/Usuario ya logueado')
  }

  enviar() {
    //console.log(this.login)

    //verifico que el usuario a registrar no exista
    this.usuarioService.obtenerUsuarios()
      .subscribe((usuarios: Usuario[]) => {
        //console.log(usuarios)

        let usuario = usuarios.find(usuario => usuario.email == this.login.email && usuario.password == this.login.password)
        console.log(usuario)
        if (usuario) {
          console.log(usuario)
          this.store.dispatch<any>(setLogin(true))
          this.store.dispatch<any>(setUser(usuario))
          this.router.navigateByUrl(usuario.isAdmin ? '/alta' : '/listado')
        }
        else {
          this.store.dispatch<any>(setLogin(false))
          this.store.dispatch<any>(setUser({}))
          this.router.navigateByUrl('/error/Error en credenciales de acceso')
        }
      })
  }

  logout() {
    this.store.dispatch<any>(setLogin(false))
    this.store.dispatch<any>(setUser({}))

    this.router.navigateByUrl('/info/User logout')
  }
}
