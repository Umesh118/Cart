import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Array<object> = [];

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this._getProducts();
  }

  _getProducts() {
    this.httpService.getAllProducts().subscribe((data: any) => {
      this.products = data.data;
      console.log(this.products);
    })
  }

  _addItemToCart(id: any, quantity: any) {
    let payload = {
      productId: id,
      quantity
    }
    this.httpService.addToCart(payload).subscribe(() => {
      this._getProducts();
      alert('Product Added');
    })
  }
}
