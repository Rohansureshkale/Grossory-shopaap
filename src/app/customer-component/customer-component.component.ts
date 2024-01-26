import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../service/product-service.service';

@Component({
  selector: 'app-customer-component',
  templateUrl: './customer-component.component.html',
  styleUrls: ['./customer-component.component.css']
})
export class CustomerComponentComponent implements OnInit{

  categories:any=[];

  constructor(private produtService :ProductServiceService){}


  ngOnInit(): void
   {
       this.categories=this.produtService.getCategories();
       console.log(this.categories  )

  }

  purchaseProduct()
  {
    
  }



}
