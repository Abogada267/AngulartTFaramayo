import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, createFeatureSelector, createSelector, select } from '@ngrx/store';
import { UsuarioService } from '../../../app/core/services/usuario.service';
import { Usuario } from '../../../app/interfaces/usuario';
import { setLogin, setUser } from '../../../app/state/videoclub.actions';
import { Appstate } from '../../../app/state/videoclub.state';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  login: Usuario = {
    email: '',
    password: '',
    isAdmin: false
  };

  logueado: boolean = false;

  constructor(
    private router: Router,
    private usuarioService: UsuarioService,
    private store: Store<Appstate>
  ) {}

  ngOnInit(): void {
    this.store.pipe(select(selectAppstate)).subscribe((state: Appstate) => {
      this.logueado = state.logueado;
    });

    if (this.logueado) {
      this.router.navigateByUrl('/warning/Usuario ya logueado');
    }
  }

  enviar() {
    this.usuarioService.obtenerUsuarios().subscribe((usuarios: Usuario[]) => {
      let usuario = usuarios.find(
        (user) => user.email === this.login.email && user.password === this.login.password
      );

      console.log(usuario);

      if (usuario) {
        console.log(usuario);
        this.store.dispatch(setLogin(true ));
        this.store.dispatch(setUser({ usuario }));
        this.router.navigateByUrl(usuario.isAdmin ? '/alta' : '/listado');
      } else {
        this.store.dispatch(setLogin(false ));
        this.store.dispatch(setUser({}));
        this.router.navigateByUrl('/error/Error en credenciales de acceso');
      }
    });
  }

  logout() {
    this.store.dispatch(setLogin( false ));
    this.store.dispatch(setUser({}));

    this.router.navigateByUrl('/info/User logout');
  }
}

// Definición de selectAppstate y selectLogueado
export const selectAppstate = createFeatureSelector<Appstate>('appstate');

export const selectLogueado = createSelector(
  selectAppstate,
  (state: Appstate) => state.logueado
);
