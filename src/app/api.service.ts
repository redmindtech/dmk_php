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
constructor(private httpClient : HttpClient) { };


@Output() districtadmin_constituency: EventEmitter<any> = new EventEmitter();


public mydist = [
    {
        name:'Select District',
        value:''
    },
    {
      name: "Namakkal",
      value:'Namakkal'
    },
    {
      name: "Salem",
      value:"Salem"
    },
    {
      name: "Trichy",
      value:"Trichy",
    },
    {
      name: "Erode",
      value:"Erode"
    },
];

public constituencies=[
  { name:'Select constituencies/தொகுதியைத் தேர்ந்தெடுக்கவும்'},{ name:'Salem (West)'}, { name:'Salem (North)'}, { name:'Salem (South)'}, { name:'Veerapandi'}, { name:'Rasipuram'},
  { name:'Senthamangalam'}, { name:'Attur'}, { name:'Yercaud'}, { name:'Namakkal'}, { name:'Rasipuram'},
  { name:'Erode (East)'}, { name:'Erode (West)'},

]
public districts=[
  { name:'Salem (West)'}, { name:'Salem (North)'}, { name:'Salem (South)'}, { name:'Veerapandi'}, { name:'Rasipuram'},
  { name:'Senthamangalam'}, { name:'Attur'}, { name:'Yercaud'}, { name:'Namakkal'}, { name:'Rasipuram'},
  { name:'Erode (East)'}, { name:'Erode (West)'},

]

public constituency:any='No-Select';



public userlogin(username : any, password :any) {
alert(username)
return this.httpClient.post<any>(this.baseUrl + '/login.php', { username, password })
.pipe(map(Users => {
  this.constituency= Users[0].district;
  //console.log(this.constituency);
  

this.setToken(Users[0].name);
this.getLoggedInName.emit(true);
return Users;
//console.log(Users);
}));
}

public userregistration(email : any,firstname:any,lastname:any,father_name:any,district:any,contact_no:any,date_of_birth:any,educational_qualification:any,profession:any,location_id:any) {
return this.httpClient.post<any>(this.baseUrl + '/register.php', { email,firstname,lastname,father_name,district,contact_no,date_of_birth,educational_qualification,profession,location_id })
.pipe(map(Users => {
return Users;
}));
}

public create_state_admin(mode:any,email:any,firstname:any,lastname:any,designation:any,party_designation:any,approval_status:any,location_id:any) {
  return this.httpClient.post<any>(this.baseUrl + '/create.php?mode=0', { mode,email,firstname,lastname,designation,party_designation,approval_status,location_id })
  .pipe(map(Users => {
  return Users;
  }))
  }

    public create_dist_admin(email:any,firstname:any,lastname:any,district:any,designation:any,party_designation:any,approval_status:any,location_id:any) {
        return this.httpClient.post<any>(this.baseUrl + '/create.php?mode=1', { email,firstname,lastname,district,designation,party_designation,approval_status,location_id })
        .pipe(map(Users => {
        return Users;
        }));
        }

        public create_office_bearers(mode:any,email:any,firstname:any,lastname:any,age:any,father_name:any,educational_qualification:any,date_of_birth:any,additional_qualification:any,contact_no:any,whatsapp_no:any,profession:any,address1:any,applied_role:any,party_comments:any,location_id:any) {
          return this.httpClient.post<any>(this.baseUrl + '/create.php?mode=2', { mode,email,firstname,lastname,age,father_name,educational_qualification,date_of_birth,additional_qualification,contact_no,whatsapp_no,profession,address1,applied_role,party_comments,location_id })
          .pipe(map(Users => {
          return Users;
          }));
          }
tabledata:any[]=[]
public viewtableSA() {
           this.httpClient.get<any>('https://redmindtechnologies.com/dmk_dev/show.php?mode=0')
              .pipe(map((res)=>{
                  const users =[];
                  for(const key in res){
                      if(res.hasOwnProperty(key)){
                          users.push({...res[key],id:key})}
                  } return users;
              })).subscribe((users:any[])=>{
                  //console.log(users);
                  this.tabledata=users[0];
                  //console.log(this.tabledata);
                  })}

tabledataDA:any[]=[];
public viewtableDA() {
           this.httpClient.get<any>('https://redmindtechnologies.com/dmk_dev/show.php?mode=1')
              .pipe(map((res)=>{
                  const users =[];
                  for(const key in res){
                      if(res.hasOwnProperty(key)){
                          users.push({...res[key],id:key})}
                  } return users;
              })).subscribe((users:any[])=>{
                  //console.log(users);
                  this.tabledataDA=users[0];
                  //console.log(this.tabledataDA);
                  })}
                  
  // tabledataOB:any[]=[];
  //   public viewtableOB() {
  //       this.httpClient.get<any>('https://redmindtechnologies.com/dmk_dev/show.php?mode=2')
  //                         .pipe(map((res)=>{
  //                                   const users =[];
  //                                   for(const key in res){
  //                                       if(res.hasOwnProperty(key)){
  //                                           users.push({...res[key],id:key})}
  //                                   } return users;
  //                               })).subscribe((users:any[])=>{
  //                                   this.tabledataOB=users[0];
  //                                   })}              


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
