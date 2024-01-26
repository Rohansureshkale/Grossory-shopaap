import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from 'src/app/service/product-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{

  categories:any=[];

  constructor(private produtService :ProductServiceService){}


  ngOnInit(): void
   {
       this.categories=this.produtService.getCategories();
       console.log(this.categories  )

  }


}
