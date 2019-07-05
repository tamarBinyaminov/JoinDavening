import { Component } from '@angular/core';
import { GabaimService } from './services/gabaim.service';
import { MinyanimService } from './services/minyanim.service';
import { PrayerService } from './services/prayer.service';
import { User } from './Models/User';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  arr: any;
  title = 'endProject';
  constructor(public gabaySer: GabaimService,public router:Router) { }
  // g() {
  //   this.gabaySer.GetAllGabaim().subscribe(r => this.arr = r);

  // }
  // gAdd() {
  //   this.gabaySer.AddGabay(new User(12, "ppp", "rrtg@54.com", '123456', '03655555',1)).subscribe(r => alert(r));

  // }
 
}
