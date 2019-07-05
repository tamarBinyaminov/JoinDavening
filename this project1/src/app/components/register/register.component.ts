import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/Models/User';
import { UserService } from 'src/app/services/user.service';
import { WebResult } from 'src/app/Models/WebResult';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User = new User();
  CurrentUser: User;
  StatusGabay: boolean=false;
  constructor(public router: Router, public userSer: UserService) {

  }
  Register() {
    if (this.StatusGabay == false)
      this.user.IsGabay = 2;
    else
      this.user.IsGabay = 3;
    this.userSer.register(this.user).subscribe((res: WebResult) => {
      if (res.Success) {
        this.CurrentUser = res.Value;
        this.userSer.user = res.Value;
        //  this.user=res.Value;
        alert(res.Message);
        //  this.router.navigate(['']);
      }
      else {
        alert(res.Message);
      }


    })


  }
  ngOnInit() {
    // let r:number= +this.Active.params["id"];
  }

}
