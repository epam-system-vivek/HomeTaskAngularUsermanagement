// import { Component, OnInit } from '@angular/core';
import { UserService } from '../users.service';
// import { User } from '../user.model';

// @Component({
//   selector: 'app-active',
//   templateUrl: './active.component.html',
//   styleUrls: ['./active.component.css'],
// })
// export class ActiveComponent implements OnInit {
//   activeUsers: User[] = [];

//   constructor(private userService: UserService) {}

//   ngOnInit(): void {
//     this.activeUsers = this.userService
//       .getUsers()
//       .filter((user: User) => !user.isDeleted);
//   }
// }
import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.css'],
})
export class ActiveComponent implements OnInit {
  activeUsers!: User[];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.activeUsers = this.userService
      .getUsers()
      .filter((user) => user.isActive);
  }

  deactivateUser(user: User) {
    this.userService.deactivateUser(user);
    this.activeUsers = this.userService
      .getUsers()
      .filter((user) => user.isActive);
  }
}
