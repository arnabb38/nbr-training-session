import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  data: any = [];
  constructor(private  http : HttpClient) {
  }


  ngOnInit(): void {
    this.getUserList();
  }


  getUserList() {
    this.http.get('http://localhost:3000/api/v1/security/get-user-list').subscribe((res: any) => {
      console.log(res)
      this.data = res.data;
    })
  }

  // addNewUser() {

  // }

}
