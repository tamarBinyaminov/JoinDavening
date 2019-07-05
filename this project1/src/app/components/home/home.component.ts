import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Minyanim } from 'src/app/Models/Minyanim';
import { MinyanimService } from 'src/app/services/minyanim.service';
import { WebResult } from 'src/app/Models/WebResult';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  prayers: Minyanim[];
  constructor(public router: Router, private minyanimSer: MinyanimService) { }
  enter() {
    this.router.navigate(['/RegisterAndLogin']);
  }
  ngOnInit() {

    this.minyanimSer.GetAllMinyanim().subscribe((suc: WebResult) => {
      if (suc.Success == true)
      {
        this.prayers = suc.Value;
        alert(suc.Message);
      }
    else
    alert(suc.Message);
    })
  }
  IsGabay(){
    //this   todo לבדוק אם הגולש הנוכחי בשרת S
  }

}
