import { ChangeDetectorRef, Component } from '@angular/core';
import { User } from '../user-model';
import { Subject, takeUntil } from 'rxjs';
import { UserService } from '../user.service';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss']
})
export class UserDataComponent {
  users: User[] = [];

  displayedColumns: string[] = ['userId', 'id', 'title', 'body'];
  userRoleDataSource: MatTableDataSource<User> = new MatTableDataSource();
  private _unsubscribeAll: Subject<any> = new Subject<any>();
  constructor(private _userService: UserService,
    private _cd: ChangeDetectorRef,
  ) {
  }
  ngOnInit() {
    this.user();
  }

  user() {
    this._userService.postUsers().pipe(takeUntil(this._unsubscribeAll)).subscribe({
      next: (res => {
        this.users = res;
        this.userRoleDataSource = new MatTableDataSource(this.users);
        this._cd.detectChanges();
        console.log(this.userRoleDataSource)
      })
    })
  }

}
