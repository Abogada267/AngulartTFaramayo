import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent
  implements OnInit {
  courses: any[] = [
    { id: 1, name: 'Course 1' },
    { id: 2, name: 'Course 2' },
  ];
  homeName: string = '';
  nombre: any;

  constructor() {}

  ngOnInit() {}
}

