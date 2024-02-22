import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  descripcion:string = ''

  constructor(private router:Router, activatedRoute : ActivatedRoute) {
    activatedRoute.params.subscribe( params => {
      this.descripcion = params['descripcion']
      //this.id = params.id
    })    
  }
  refTimeOut :any = null

  ngOnInit(): void {
    this.refTimeOut = setTimeout(() => {
      this.router.navigateByUrl('/login')
    },2000)
  }

  ngOnDestroy() {
    clearTimeout(this.refTimeOut)
  }
}