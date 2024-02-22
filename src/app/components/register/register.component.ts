import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from 'redux';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { Appstate } from 'src/app/state/videoclub.state';
import { AppStore } from 'src/app/state/videoclub.store';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  register: Usuario = {
    nombre: '',
    email: '',
    password: '',
    isAdmin: false
  }

  constructor(
    private router: Router,
    private usuarioService: UsuarioService,
    @Inject(AppStore) private store: Store<Appstate>
  ) { }

  ngOnInit(): void {
  }
  
  enviar() {
    //console.log(this.register)

    if (!this.register.email || !this.register.password) this.router.navigateByUrl('/error/Error en registro')
    else {
      //verifico que el usuario a registrar no exista
      this.usuarioService.obtenerUsuarios()
        .subscribe((usuarios: Usuario[]) => {
          //console.log(usuarios)

          let usuario = usuarios.find(usuario => usuario.email == this.register.email)
          //console.log(usuario)
          if(usuario) this.router.navigateByUrl('/error/el usuario ya existe')
          else {
            //Registro el usuario nuevo
            this.usuarioService.guardarUsuario(this.register)
              .subscribe((usuario: Usuario) => {
                //console.log(usuario)
                this.router.navigateByUrl('/info/Usuario registrado')
              })
          }
        })
    }
  }
}
