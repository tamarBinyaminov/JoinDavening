import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { User } from '../Models/User';


@Injectable({
  providedIn: 'root'
})

export class GabaimService {

  GetAllGabaim() :Observable<User[]>{
  return  this.http.get<User[]>(environment.BaseUrl+"User/GetAllGabaim");

  }
  AddGabay(g:User) :Observable<any>{
    return  this.http.post(environment.BaseUrl+"User/AddGabay",g);
  
    }
  
  constructor(public http:HttpClient ) { }
}
