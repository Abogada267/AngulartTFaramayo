import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  showFiller = false;

  constructor(private router: Router, private route: ActivatedRoute) {}

  logout(): void {
    // Acción de logout: Eliminar token y redirigir a login con queryParams
    localStorage.removeItem('access-token');
    this.router.navigate(['auth', 'login'], {
      queryParams: {
        hola: 'mundo',
      },
    });
  }
}
