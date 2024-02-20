import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, catchError, map, tap } from 'rxjs';
import { throwError } from 'rxjs/internal/observable/throwError';
import { environment } from '../../../environments/environment';
import { AlertsService } from '../../core/services/alerts.service';
import { AuthActions } from '../../core/store/auth/actions/index';
import { User } from '../dashboard/pages/users/models';


interface LoginData {
  email: null | string;
  password: null | string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  authUser(authUser: any): void {
    throw new Error('Method not implemented.');
  }

  constructor(
    private router: Router,
    private alertsService: AlertsService,
    private httpClient: HttpClient,
    private store: Store
  ) {}

  private setAuthUser(user: User): void {
    this.store.dispatch(AuthActions.setAuthUser({ user }));
    localStorage.setItem('token', user.token || ''); 
  }

  login(data: LoginData): Observable<User[]> {
    return this.httpClient
      .get<User[]>(
        `${environment.apiURL}/users?email=${data.email}&password=${data.password}`
      )
      .pipe(
        tap((response) => {
          if (!!response[0]) {
            this.setAuthUser(response[0]);
            this.router.navigate(['dashboard', 'home']);
          } else {
            this.alertsService.showError('Email o password invalidos');
          }
        }),
        catchError((error) => {
          console.error('Error during login:', error);
                   return throwError(error);
        })
      );
  }

  logout(): void {
    this.store.dispatch(AuthActions.logout());
    this.router.navigate(['auth', 'login']);
    localStorage.removeItem('token');
  }

  verifyToken(): Observable<boolean> {
    const storedToken = localStorage.getItem('token');

    if (!storedToken) {
      this.store.dispatch(AuthActions.logout());
      return of(false);
    }

    return this.httpClient
      .get<User[]>(`${environment.apiURL}/users?token=${storedToken}`)
      .pipe(
        map((response) => {
          if (response.length) {
            this.setAuthUser(response[0]);
            return true;
          } else {
            this.store.dispatch(AuthActions.logout());
            localStorage.removeItem('token');
            return false;
          }
        }),
        catchError((error) => {
          console.error('Error during token verification:', error);
         
          return throwError(error);
        })
      );
  }
}

function of(arg0: boolean): Observable<boolean> {
  throw new Error('Function not implemented.');
}

