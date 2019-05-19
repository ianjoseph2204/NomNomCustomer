import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UrlService } from './../services/url/url.service';


@Component({
	selector: 'app-register',
	templateUrl: './register.page.html',
	styleUrls: ['./register.page.scss'],
})

export class RegisterPage implements OnInit {
	private regUrl = UrlService.getRegUrl();
	private registerLog = [];
	private message: string = "";
	username: string = "";
	password: string = "";
	email: string = "";
	nama: string = "";
	tel: string = "";
	alamat: string = "";

	constructor(private router: Router, private http: HttpClient) { }
	ngOnInit() {
	}

	regButton() {
		//alert("register successfull");
		this.http.post(this.regUrl,
			{
				"username": this.username,
				"password": this.password,
				"email": this.email,
				"nama": this.nama,
				"tel": this.tel,
				"alamat": this.alamat
			}).subscribe(res => {
				this.registerLog = res['registerLog'];
			});

		if (this.registerLog['error'] == false) {
			this.router.navigate(['']);
		}else{
			this.message = this.registerLog['message'];
			alert(this.message);
		}
	}
}
