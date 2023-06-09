import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../users.service';

@Component({
  selector: 'app-deleted',
  templateUrl: './deleted.component.html',
  styleUrls: ['./deleted.component.css'],
})
export class DeletedComponent implements OnInit {
  users!: User[];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.users = this.userService.getUsers().filter((user) => user.isDeleted);
  }

  activateUser(user: User): void {
    this.userService.activateUser(user);
    this.users = this.userService.getUsers().filter((user) => user.isDeleted);
  }
}
