import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  homeName: string = '';
  longText: string = '';

  ngOnInit() {}

  updateHomeName(event: any): void {
    this.homeName = (event.target as HTMLInputElement).value;
  }
}



 