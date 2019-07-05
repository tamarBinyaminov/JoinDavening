import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Minyanim } from '../Models/Minyanim';
import { WebResult } from '../Models/WebResult';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class MinyanimService {

  constructor(private http: HttpClient) { }
  GetAllMinyanim(){
  return  this.http.get<WebResult>(environment.BaseUrl+"Minyanim/GetAllMinyan");
  }
}
