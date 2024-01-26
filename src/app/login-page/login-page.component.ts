import { Component } from '@angular/core';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  username: string = '';
  password: string = '';

  user:any=[];
  constructor(private UserService:UserService,private router:Router,private app:AppComponent){}

  login(username:string,password:string) 
  {
    this.user=this.UserService.login(username,password);
    if(this.user!=null)
    {
      if(this.user.role=="customer")
      this.router.navigate(['/Home']); 
    else if(this.user.role=="admin")
    {
    
    this.router.navigate(['/AllProducts']); 
    this.app.showAddProduct=true;
    this.app.showAllProduct=true;


    }

    }
    else
    {
      alert("login Failed")
    }

    
  }

}
