import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
   users = [
    {
      username: 'john',
      role: 'customer',
      fullName: 'John Doe',
      email: 'john@gmail.com',
      password:"john123"
    },
    {
      username: 'admin',
      role: 'admin',
      fullName: 'Admin User',
      email: 'admin@gmail.com',
      password:"admin"

    },
  ];

  login(username: string, password: string): any
   {
    for (const user of this.users) 
    {
      if (user.username === username && user.password === password) 
      {
        return user;
      }
    }
    alert("failed");
    return null;
  }
  

}
