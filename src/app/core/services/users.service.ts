import { Injectable } from '@angular/core';
import { Observable, delay, of, tap } from 'rxjs';
import { User } from '../../layouts/dashboard/pages/users/models';
import { AlertsService } from './alerts.service';

const Roles_DB: string []= ["ADMIN", "USER"];

let USER_DB: User[] = [
  {
    id: 1,
    firstName: "Malvina",
    lastName: "mmm",
    email: "mmm@maoo.com",
    password: "123456",
    role: "ADMIN",
  },
  {
    id: 2,
    firstName: "Graciela",
    lastName: "yy",
    email: "mmm@maoo.com",
    password: "123456",
    role: "USER",
  },
];

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private alerts: AlertsService) { }
  
  getRoles(): Observable<string[]> {
    return of(Roles_DB).pipe(delay(0));
  }

  getUsers() {
    return of(USER_DB).pipe(delay(0));
  }

  createUser(payload: User) {
    USER_DB.push(payload);
    return this.getUsers();
  }

  deleteUser(userID: number) {
    USER_DB = USER_DB.filter((user) => user.id !== userID);
    return this.getUsers().pipe(
      tap(() =>
        this.alerts.showSuccess("Realizado", "Se elimino correctamente")
      )
    );
  }
}
