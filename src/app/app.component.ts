import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Grossary_Shop';

  showLogout:boolean=false;
  showAllProduct:boolean=false;
  showAddProduct:boolean=false;



  logout() {
    alert("logout")
    throw new Error('Method not implemented.');
    }

}
