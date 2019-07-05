import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/User';
import { UserService } from 'src/app/services/user.service';
import { WebResult } from 'src/app/Models/WebResult';
import { Minyanim } from 'src/app/Models/Minyanim';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user:User=new User();
minyanim:Minyanim[];
//curentUser:User;
  // loginSer: any;
  constructor( public router:Router,public loginSer:UserService) { }
  
  login(){
  this.loginSer.login(this.user).subscribe((suc:WebResult)=>{
    if(suc.Success)
    {
    alert(suc.Message),
    //this.curentUser=suc.Value,
    this.loginSer.user=suc.Value;
    this.minyanim=suc.Value;
    }
  else{
    alert(suc.Message)
    
  }
  },
  
  );
 

  }
// addMinyan(){
//   this.router.navigate(['/addMinyan']);
// }
  ngOnInit() {
  }

}
