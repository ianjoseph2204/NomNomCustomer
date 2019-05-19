import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})

export class ProfilePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToLogin()
  {
    this.router.navigate(['login']);
  }

}
