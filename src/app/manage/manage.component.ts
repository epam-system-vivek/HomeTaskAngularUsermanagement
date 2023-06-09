// import { Component, OnInit } from '@angular/core';
// import { User } from '../user.model';
// import { UserService } from '../users.service';

// @Component({
//   selector: 'app-manage',
//   templateUrl: './manage.component.html',
//   styleUrls: ['./manage.component.css'],
// })
// export class ManageComponent implements OnInit {
//   users!: User[];

//   constructor(private userService: UserService) {}

//   ngOnInit(): void {
//     this.users = this.userService.getUsers();
//   }

//   activateUser(user: User): void {
//     this.userService.activateUser(user);
//   }

//   deactivateUser(user: User): void {
//     this.userService.deactivateUser(user);
//   }
// }
import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../users.service';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css'],
})
export class ManageComponent implements OnInit {
  activeUsers: User[] = [];
  deletedUsers: User[] = [];
  selectedUser?: User;
  users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.activeUsers = this.userService
      .getActiveUsers()
      .sort((a, b) => +a.id - +b.id);
    this.deletedUsers = this.userService
      .getDeletedUsers()
      .sort((a, b) => +a.id - +b.id);
    // this.users = this.userService.getUsers();
  }

  showDetails(user: User) {
    this.selectedUser = user;
  }
}
