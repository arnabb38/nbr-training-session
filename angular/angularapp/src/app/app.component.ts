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

  personList = [
    {
      "name": "John Smith",
      "age": 32,
      "occupation": "Software Engineer",
      "email": "john.smith@email.com",
      "location": "New York, USA"
    },
    {
      "name": "Emily Davis",
      "age": 28,
      "occupation": "Marketing Manager",
      "email": "emily.davis@email.com",
      "location": "Los Angeles, USA"
    },
    {
      "name": "David Johnson",
      "age": 45,
      "occupation": "Financial Analyst",
      "email": "david.johnson@email.com",
      "location": "London, UK"
    },
    {
      "name": "Sarah Williams",
      "age": 29,
      "occupation": "Nurse",
      "email": "sarah.williams@email.com",
      "location": "Toronto, Canada"
    },
    {
      "name": "Michael Brown",
      "age": 38,
      "occupation": "Sales Manager",
      "email": "michael.brown@email.com",
      "location": "Sydney, Australia"
    },
    {
      "name": "Jessica Lee",
      "age": 27,
      "occupation": "Graphic Designer",
      "email": "jessica.lee@email.com",
      "location": "San Francisco, USA"
    }
  ];

  display: boolean = true

  onClick() {
    debugger
    this.display = !this.display;
  }

  searchText: string = '';

  searchEvent(event: any) {
    console.log(event)
    this.searchText = event.target.value;
  }

  inputValue: string = 'Angular';


}


