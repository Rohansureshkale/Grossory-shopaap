import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private router:Router) { }

   categories =
   [
      {
        name: 'Pulses',
       products: 
       [
        { 
          name: 'Lentils',
          price: 2.99
         },

        { 
           name: 'Chickpeas',
           price: 3.49 

        },
        // Add more products as needed
      ],
    },
    {
      name: 'Dairy',
      products: [
        { name: 'Milk', price: 1.99 },
        { name: 'Butter', price: 2.49 },
        // Add more products as needed
      ],
    },
    {
      name: 'Snacks',
      products: [
        { name: 'Potato Chips', price: 1.49 },
        { name: 'Chocolate Bars', price: 2.99 },
      ],
    },
  ];

  getCategories() {
    return this.categories;
  }

  
  addProduct(categoryName: any, productName: any, productPrice: any) {
    const category = this.categories.find(cat => cat.name === categoryName);

    if (category) {
      const newProduct = { name: productName, price: productPrice };
      category.products.push(newProduct);
      this.router.navigate(['/AllProducts']); 


    } else {
      console.error(`Category ${categoryName} not found.`);
    }
  }

  }



