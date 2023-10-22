import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  productList: any = [];
  constructor(private http: HttpClient) {
    this.getProductList();
  }

  getProductList() {
    this.http.get('https://dummyjson.com/products').subscribe((res: any) => {
      this.productList = res.products;
      console.log(this.productList)
    });
  }
}


