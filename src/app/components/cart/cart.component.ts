import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  carts: any;
  cartDetails: any;
  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this._getCart();
  }

  _getCart() {
    this.httpService.getCartItems().subscribe((data) => {
      this.carts = data;
      console.log(this.carts);
    })
  }

  _increamentQty(id: any, quantity: any): void {
    let payload = {
      productId: id,
      quantity
    }
    this.httpService.increaseQty(payload).subscribe(() => {
      this._getCart();
      alert('Product Added');
    })
  }

  _emptyCart(): void {
    this.httpService.emptyCart().subscribe(() => {
      this._getCart();
      alert('Cart Emptied');
    })
  }

}
