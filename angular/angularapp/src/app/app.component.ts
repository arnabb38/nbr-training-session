import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  myName = "Mohammad Mashud Karim";
  age =  18
  dateOfBirth = '2020-09-09'

  discountedPrice = 0;

  product = {
    name: 'iPhone 15 pro',
    color: 'White',
    price: 120000,
    discount: 4.5,
    inStock: 0
  }

  getDiscountedPrice() {
    return this.product.price - (this.product.price * this.product.discount)/100;

  //  this.discountedPrice = this.product.price - (this.product.price * this.product.discount)/100;

  }


  // ngOnInit(): void {
  //   this.getDiscountedPrice();
  // }



}


