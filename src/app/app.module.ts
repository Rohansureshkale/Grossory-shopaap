import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponentComponent } from './customer-component/customer-component.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ProductListComponent } from './admin/product-list/product-list.component';
import { AddProductComponent } from './admin/add-product/add-product.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomerComponentComponent,
    LoginPageComponent,
    ProductListComponent,
    AddProductComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
