import { Component, OnInit } from '@angular/core';
import { Minyanim } from 'src/app/Models/Minyanim';
import { Router } from '@angular/router';

@Component({
  selector: 'app-minyanim',
  templateUrl: './minyanim.component.html',
  styleUrls: ['./minyanim.component.css']
})
export class MinyanimComponent implements OnInit {
  minyan: Minyanim;
  constructor() { }

  ngOnInit() {
  }

}
