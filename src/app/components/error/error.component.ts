import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  descripcion:string = ''

  constructor(private router:Router, activatedRoute : ActivatedRoute) {
    activatedRoute.params.subscribe( params => {
      this.descripcion = params['descripcion']
      
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