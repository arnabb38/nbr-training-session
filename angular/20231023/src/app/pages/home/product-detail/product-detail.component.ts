import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {

  productDetail: any = {};
  productId: string = '';
  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) {
    this.productId = this.activatedRoute.snapshot.paramMap.get('id') || '';
    this.getProductDetail();
  }

  getProductDetail() {
    this.http.get(`https://dummyjson.com/products/${this.productId}`).subscribe((res: any) => {
      this.productDetail = res;
      console.log(this.productDetail)
    });
  }

}
