import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicService } from 'src/app/services/basic.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  userName: string = '';
  password: string = '';
  valid: boolean;

  constructor(
    private basicService: BasicService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.valid = true;
  }

  submitLogin() {
    if (this.password === this.basicService.PASSWORD) {
      this.router.navigate(['search']);
    } else {
      this.valid = false;
    }
  }

  clearLogin() {
    this.userName = '';
    this.password = '';
    this.valid = true;
  }

}
