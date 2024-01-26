import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponentComponent } from './customer-component/customer-component.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ProductListComponent } from './admin/product-list/product-list.component';
import { AddProductComponent } from './admin/add-product/add-product.component';

const routes: Routes = [

  {path:"",redirectTo:"/ShowLoginPage",pathMatch:'full'},


  {path:"Home",component:CustomerComponentComponent},
  {path:"ShowLoginPage",component:LoginPageComponent},
  {path:"AllProducts",component:ProductListComponent},
  {path:"AddProducts",component:AddProductComponent},




  





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
