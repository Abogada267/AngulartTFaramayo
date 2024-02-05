import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  selectedCurso: any;  
  homeName: string = '';
  courses: any[] = [
    { id: 1, name: 'Course 1' },
    { id: 2, name: 'Course 2' },
  ];
cursos: any;


  constructor() {}

  ngOnInit() {}

updateHomeName(event: any): void {
    this.homeName = event.target.value;
  }
}
 