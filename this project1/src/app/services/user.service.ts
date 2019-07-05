import { Injectable } from '@angular/core';
import { User } from '../Models/User';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';
import { WebResult } from '../Models/WebResult';

@Injectable({
  providedIn: 'root'
})
export class UserService {
user:User;
  constructor(private http: HttpClient) { }
  // AddGabay(g:User) :Observable<any>{
  //   return  this.http.post(environment.BaseUrl+"User/AddGabay",g);
  
  //   }
  register(user: User): Observable<WebResult> {
    return this.http.post<WebResult>(environment.BaseUrl + "User/Register", user);
  }
  login(user:User):Observable<WebResult>{
    return this.http.post<WebResult>(environment.BaseUrl+"User/Login",user);
  }

}
