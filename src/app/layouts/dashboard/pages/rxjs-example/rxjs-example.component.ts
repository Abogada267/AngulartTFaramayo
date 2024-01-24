import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-rxjs-example',
  templateUrl: './rxjs-example.component.html',
  styleUrl: './rxjs-example.component.scss',
})
export class RxjsExampleComponent {

   

  loading = false;

  users: string[] = [];

  getUsersSubscription?: Subscription;

  

  constructor() {
    console.log('Se instancio el componente');

    setTimeout(() => {
      console.log('Timeout!');
    }, 1000);

    console.log('---- FIN ----');

    
  }

  getUsersFromObservable(): void {
    this.getUsersSubscription?.unsubscribe();

    this.loading = true;
    const getUsers$ = new Observable<string[]>((subscriber) => {
      

      setInterval(() => {
        subscriber.error(
          'No posee permisos para consultar la lista de usuarios'
        );
        
      }, 1000);
    });

    this.getUsersSubscription = getUsers$.subscribe({
      
      next: (respuesta) => {
        this.users = respuesta;
      },
      
      error: (error) => {
        alert(error);
      },
    
      complete: () => {
        this.loading = false;
      },
    });
  }

  getUsersFromPromise(): void {
    
    const getUsers = new Promise<string[]>((resolve, reject) => {
      
      setTimeout(() => {
        resolve(['Goku', 'Gohan', 'Videl', 'Piccolo', 'Milk']);
      }, 2000);
    });

    this.loading = true;
    getUsers
      
      .then((respuesta) => {
        this.users = respuesta;
      })
      
      .catch((error) => console.error(error))
     
      .finally(() => {
        this.loading = false;
      });
  }
}