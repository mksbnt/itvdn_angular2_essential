import { Component, OnInit } from '@angular/core';
import { Product } from '../../product';
import { PRODUCTS } from '../../productsList';

@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.css']
})

export class MyTableComponent implements OnInit {

  product: Product = {
    id: 1,
    name: "product 1",
    price: 100
  };

  products = PRODUCTS;

  delete(i){
    console.log("id: " + this.products[i].id);
    this.products.splice(i,1);
}

  // isBgDanger: boolean = true;
  isBgDanger(i){
    if(this.products[i].price > 500){
      return true
    } else {
      return false
    }
  }



  constructor() { }

  ngOnInit() {
  }

}
