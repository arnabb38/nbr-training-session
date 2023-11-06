import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIEndpoint } from '../../core/constants/api-endpoint';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  userList: any = [];
  constructor(private  http : HttpClient) {
  }


  ngOnInit(): void {
    this.getUserList();
  }


  getUserList() {
    this.http.get(APIEndpoint.base_url + APIEndpoint.USER_LIST).subscribe((res: any) => {
      console.log(res)
      this.userList = res.data;
    })
  }

  // addNewUser() {

  // }

}
