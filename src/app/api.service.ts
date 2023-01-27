import { Injectable, Output, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { AnyARecord } from 'dns';
import { Password } from 'primeng/password';
//import { Users } from './users';

@Injectable({
providedIn: 'root'
})

export class ApiService {
redirectUrl!: string;
baseUrl:string = "https://redmindtechnologies.com/dmk_dev";
//baseUrl:string="http://localhost/new_dmk/php"
@Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
constructor(private httpClient : HttpClient) { }


public mydist = [
    {
        name:'Select District'
    },
    {
      name: "Namakkal",
    },
    {
      name: "Salem",
    },
    {
      name: "Trichy",
    },
    {
      name: "Erode",
    },
];



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

public create_state_admin(email:any,firstname:any,lastname:any,district:any,designation:any,party_designation:any,approval_status:any,location_id:any) {
    return this.httpClient.post<any>(this.baseUrl + '/create.php?mode=0', { email,firstname,lastname,district,designation,party_designation,approval_status,location_id })
    .pipe(map(Users => {
    return Users;
    }));
    }

    public create_dist_admin(email:any,firstname:any,lastname:any,district:any,designation:any,party_designation:any,approval_status:any,location_id:any) {
        return this.httpClient.post<any>(this.baseUrl + '/create.php?mode=1', { email,firstname,lastname,district,designation,party_designation,approval_status,location_id })
        .pipe(map(Users => {
        return Users;
        }));
        }

    public create_office_bearers(email:any,firstname:any,lastname:any,age:any,father_name:any,educational_qualification:any,date_of_birth:any,additional_qualification:any,contact_no:any,whatsapp_no:any,profession:any,address1:any,applied_role:any,party_comments:any,location_id:any) {
        return this.httpClient.post<any>(this.baseUrl + '/create.php?mode=2', { email,firstname,lastname,age,father_name,educational_qualification,date_of_birth,additional_qualification,contact_no,whatsapp_no,profession,address1,applied_role,party_comments,location_id })
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
