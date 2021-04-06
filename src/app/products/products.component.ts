import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Product } from '../model/product';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: any = [];
  constructor(public apiService: ApiService) {
  }

  ngOnInit(): void {

    this.fetchProducts();
  }

  fetchProducts() {
    this.apiService.getProducts().subscribe(data => {
      this.products = data;
      console.log(data);
    });
  }
}
