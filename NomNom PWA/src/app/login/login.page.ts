import { UrlService } from './../services/url/url.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  private loginUrl = UrlService.getLoginUrl();
  private loginLog = [];
  username: string = "";
  password: string = "";
  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
  }

  login() {
    this.http.post(this.loginUrl,
      {
        "username": this.username,
        "password": this.password
      }).subscribe(res => {
        this.loginLog = res["loginLog"];
      });

    if (this.loginLog['error'] == false) {
      this.router.navigate(['home']);
    } else if (this.loginLog['error'] == true) {
      alert("Wrong Username or Password!")
    }
  }

  registerButton() {
    this.router.navigate(['register']);
  }
}
