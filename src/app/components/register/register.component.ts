import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from 'redux';
import { Usuario } from '../../../app/interfaces/usuario';
import { UsuarioService } from '../../core/services/usuario.service';
import { Appstate } from '../../state/videoclub.state';
import { AppStore } from '../../state/videoclub.store';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
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
    
    if (!this.register.email || !this.register.password) this.router.navigateByUrl('/error/Error en registro')
    else {
      
      this.usuarioService.obtenerUsuarios()
        .subscribe((usuarios: Usuario[]) => {
    let usuario = usuarios.find(usuario => usuario.email == this.register.email)
          
          if(usuario) this.router.navigateByUrl('/error/el usuario ya existe')
          else {
            
            this.usuarioService.guardarUsuario(this.register)
              .subscribe((usuario: Usuario) => {
                
                this.router.navigateByUrl('/info/Usuario registrado')
              })
          }
        })
    }
  }
}
