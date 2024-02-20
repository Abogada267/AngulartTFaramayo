import { Component } from '@angular/core';
import { LoadingService } from './core/services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Estudio Juridico Malvina Aramayo';
  isLoading = false;
  
  constructor(private LoadingService: LoadingService) {
    this.LoadingService.isLoading$.subscribe({
      next: (v) => {
        setTimeout(() => {
          this.isLoading = v;
        });
      }
    });
  }
}