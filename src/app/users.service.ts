import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: User[] = [
    {
      id: 'login1',
      firstName: 'One',
      lastName: 'User',
      age: 30,
      login: 'johndoe',
      password: '123456',
      isDeleted: false,
      isActive: true,
    },
    {
      id: 'login2',
      firstName: 'Two',
      lastName: 'User',
      age: 25,
      login: 'twodoe',
      password: '1234vj56',
      isDeleted: true,
      isActive: false,
    },
    {
      id: 'log3',
      firstName: 'Three',
      lastName: 'User',
      age: 40,
      login: 'smith',
      password: '123456',
      isDeleted: false,
      isActive: true,
    },
    {
      id: 'log4',
      firstName: 'Four',
      lastName: 'User',
      age: 35,
      login: 'alicejohnson',
      password: '123456',
      isDeleted: true,
      isActive: false,
    },
    {
      id: 'login5',
      firstName: 'Five',
      lastName: 'User',
      age: 28,
      login: 'mikewilliams',
      password: '123456',
      isDeleted: false,
      isActive: true,
    },
    {
      id: 'login6',
      firstName: 'Six',
      lastName: 'User',
      age: 23,
      login: 'mikewilliams',
      password: '123456',
      isDeleted: false,
      isActive: true,
    },
    {
      id: 'login7',
      firstName: 'Seven',
      lastName: 'User',
      age: 24,
      login: 'mibhumiks',
      password: '123456bhu',
      isDeleted: true,
      isActive: false,
    },
    {
      id: 'login8',
      firstName: 'Eight',
      lastName: 'User',
      age: 24,
      login: 'saibh',
      password: 'BVJ123456bhu',
      isDeleted: false,
      isActive: true,
    },
  ];

  constructor() {}

  getUsers(): User[] {
    return this.users;
  }

  getActiveUsers(): User[] {
    return this.users.filter((user) => user.isActive && !user.isDeleted);
  }

  activateUser(user: User): void {
    user.isDeleted = false;
    user.isActive = true;
    const index = this.users.findIndex((u) => u.id === user.id);
    if (index >= 0) {
      this.users[index] = user;
    }
  }

  deactivateUser(user: User): void {
    user.isDeleted = true;
    user.isActive = false;
  }
  getDeletedUsers(): User[] {
    return this.users.filter((user) => user.isDeleted);
  }
}
