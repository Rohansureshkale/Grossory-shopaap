import { Component } from '@angular/core';
import { ProductServiceService } from 'src/app/service/product-service.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {


   categories: string[] = ['Pulses', 'Dairy', 'Snacks'];
   productName:String="";
   selectedCategory: string="";
   productPrice:Number=0;

   constructor(private productService:ProductServiceService){}

   AddProduct(category:String,pname:String,price:any)
    {
      alert(category+" "+pname+" "+price);
      this.productService.addProduct(category,pname,price);
    }

}
