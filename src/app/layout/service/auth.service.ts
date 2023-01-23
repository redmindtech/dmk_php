import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router,private http:HttpClient) { }

  isAuthenticated():boolean{
    if (sessionStorage.getItem('token')!==null) {
        return true;
    }
    return false;
  }

  canAccess(){
    if (!this.isAuthenticated()) {
        this.router.navigate(['/login']);
    }
  }
  canAuthenticate(): void{
    if (this.isAuthenticated()) {
    
      this.router.navigate(['/dashboard']);
    }
  }

  register(name:string,email:string,password:string){
  
     return this.http.post<{idToken:string}>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDEjoJexSbPt_qcPb_o8U8237XPrSMZv70',
          {displayName:name,email,password}
      );
  }

storeToken({ token }: { token: string; }){
      sessionStorage.setItem('token',token);
  }
  

  login(email:string,password:string){
    const httpOptions : Object = {
      headers: new HttpHeaders({
        'Content-Type':'application/x-www-form-urlencoded',
        'Access-Control-Allow-Origin': 'http://localhost:4200'
      })
    }

      return this.http.post(
          'http://localhost/login/list.php',
            {email,password},httpOptions
      );
  }

  detail(){
    let token = sessionStorage.getItem('token');

    return this.http.post<{users:Array<{localId:string,displayName:string}>}>(
        'https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyDEjoJexSbPt_qcPb_o8U8237XPrSMZv70',
        {idToken:token}
    );
  }

  removeToken(){
    sessionStorage.removeItem('token');
  }



}
