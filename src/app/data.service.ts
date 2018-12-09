import { Injectable } from '@angular/core';
import { Product } from './product';
import { PRODUCTS } from './productsList';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  getProducts(): Product[] {
    return PRODUCTS;
  }

  constructor() { }
}
