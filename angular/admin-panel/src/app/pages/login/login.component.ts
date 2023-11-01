import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private http: HttpClient, private router: Router) {

  }

  login = {
    userId: '',
    password: ''
  }

  doLogin() {
    this.http.post('http://127.0.0.1:3000/api/v1/security/login-with-db', this.login).subscribe((res: any) => {
        if(res.code === 200) {
          localStorage.setItem('nbr.pmis.auth', '11');
          this.router.navigate(['/'])
        } else {
          alert(res.message)
        }
    })
  }

}
