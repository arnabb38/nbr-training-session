import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CardComponent } from 'src/app/card/card.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [CommonModule, CardComponent]

})
export class HomeComponent {
  productList: any = [];
  constructor(private http: HttpClient) {
    this.getProductList();
  }

  getProductList() {
    this.http.get('https://dummyjson.com/products').subscribe((res: any) => {
      this.productList = res.products;
    });
  }
}
