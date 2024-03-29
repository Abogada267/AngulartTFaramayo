import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { LoadingService } from '../../../../core/services/loading.service';
import { User } from '../users/models/index';
import { UsersService } from './users.service';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'], 
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = ['id', 'fullName', 'email', 'role', 'actions'];
  dataSource: User[] = [];
  roles: string[] = [];

  constructor(
    private usersService: UsersService,
    private loadingService: LoadingService,
    private route: ActivatedRoute,
  ) {
    console.log(this.route.snapshot.queryParams);
  }

  ngOnInit(): void {
    this.getPageData();
  }

  getPageData(): void {
    this.loadingService.setIsLoading(true);
    forkJoin([
      this.usersService.getRoles(),
      this.usersService.getUsers(),
    ]).subscribe({
      next: (value) => {
        this.roles = value[0];
        this.dataSource = value[1];
      },
      complete: () => {
        this.loadingService.setIsLoading(false);
      },
    });
  }

  onDeleteUser(ev: User): void {
    this.loadingService.setIsLoading(true);
    this.usersService.deleteUser(ev.id).subscribe({
      next: (users) => {
        this.dataSource = [...users];
      },
      complete: () => {
        this.loadingService.setIsLoading(false);
      },
    });
  }

  onUserSubmitted(ev: User): void {
    this.loadingService.setIsLoading(true);
    this.usersService
      .createUser({ ...ev, id: new Date().getTime() })
      .subscribe({
        next: (users) => {
          this.dataSource = [...users];
        },
        complete: () => {
          this.loadingService.setIsLoading(false);
        },
      });
  }
}
