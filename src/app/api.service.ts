/*import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }
}
*/
import { Injectable, Output, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { AnyARecord } from 'dns';
//import { Users } from './users';

@Injectable({
providedIn: 'root'
})

export class ApiService {
redirectUrl!: string;
baseUrl:string = "http://localhost/hh/php";
@Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
constructor(private httpClient : HttpClient) { }
public userlogin(username : any, password :any) {
alert(username)
return this.httpClient.post<any>(this.baseUrl + '/login.php', { username, password })
.pipe(map(Users => {
this.setToken(Users[0].name);
this.getLoggedInName.emit(true);
return Users;
}));
}

public userregistration(email : any,firstname:any,lastname:any,father_name:any,district:any,contact_no:any,date_of_birth:any,educational_qualification:any,profession:any,location_id:any) {
return this.httpClient.post<any>(this.baseUrl + '/register.php', { email,firstname,lastname,father_name,district,contact_no,date_of_birth,educational_qualification,profession,location_id })
.pipe(map(Users => {
return Users;
}));
}

//token
setToken(token: string) {
  localStorage.setItem('token', token);
  }
  getToken() {
  return localStorage.getItem('token');
  }
  deleteToken() {
  localStorage.removeItem('token');
  }
  isLoggedIn() {
  const usertoken = this.getToken();
  if (usertoken != null) {
  return true
  }
  return false;
  }
  }
