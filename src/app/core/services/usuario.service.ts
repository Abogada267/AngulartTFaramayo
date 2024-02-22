import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { UtilService } from '../../../app/core/services/util.service';
import { Usuario } from '../../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url:string = ''

  constructor(
    private http: HttpClient,
    private utilService :  UtilService
  ) {
    this.url = this.utilService.URL_BASE + '/usuarios/'
  }


  /* GET */
  obtenerUsuarios() {
    return this.http.get<Usuario[]>(this.url).pipe(
      catchError(this.utilService.handleError)
    )
  }

  /* POST */
  guardarUsuario(usuario: Usuario) {
    return this.http.post<Usuario>(this.url, usuario, this.utilService.getHttpOptions()).pipe(
      catchError(this.utilService.handleError)
    )
  }  
}