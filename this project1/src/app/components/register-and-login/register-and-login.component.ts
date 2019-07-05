import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-and-login',
  templateUrl: './register-and-login.component.html',
  styleUrls: ['./register-and-login.component.css']
})
export class RegisterAndLoginComponent implements OnInit {

  constructor(public router:Router) { }

  register(){
    this.router.navigate(['/register']);
  }
  login(){
    this.router.navigate(['/login']);
  }
  ngOnInit() {
  }

}
