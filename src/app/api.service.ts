import {Component ,Injectable, Output, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import {Component ,Input, Output,EventEmitter}
import { AnyARecord } from 'dns';
import { Password } from 'primeng/password';
import { MiscDemoComponent } from './demo/components/uikit/misc/miscdemo.component';
//import { Users } from './users';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  redirectUrl!: string;
<<<<<<< HEAD
   baseUrl:string = "https://redmindtechnologies.com/dmk_dev";
  // baseUrl: string = "http://localhost/php";
=======
    baseUrl:string = "https://redmindtechnologies.com/dmk_dev";
    //  baseUrl: string = "http://localhost/lat_git_dmk/dmk_php/php/php/php";
>>>>>>> 9b6aee123ef74c64dbde6281e5e2c714c828f102
  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
  MiscDemoComponent: any;
  rq: any;
   
  //request_admin:any;
 // MiscDemoComponent: any;
  constructor(private httpClient: HttpClient) { };
  ngOnInit(): void {
  }


  @Output() districtadmin_constituency: EventEmitter<any> = new EventEmitter();


  public mydist = [
    {
      name: 'Select District',
      value: ''
    },
    {
      name: "Namakkal",
      value: 'Namakkal'
    },
    {
      name: "Salem",
      value: "Salem"
    },
    {
      name: "Trichy",
      value: "Trichy",
    },
    {
      name: "Erode",
      value: "Erode"
    },
  ];

  public constituencies = [
    { name: 'Select constituencies/தொகுதியைத் தேர்ந்தெடுக்கவும்' }, { name: 'Salem (West)' }, { name: 'Salem (North)' }, { name: 'Salem (South)' }, { name: 'Veerapandi' }, { name: 'Rasipuram' },
    { name: 'Senthamangalam' }, { name: 'Attur' }, { name: 'Yercaud' }, { name: 'Namakkal' }, { name: 'Rasipuram' },
    { name: 'Erode (East)' }, { name: 'Erode (West)' },

  ]
  public districts = [
    { name: 'Salem (West)' }, { name: 'Salem (North)' }, { name: 'Salem (South)' }, { name: 'Veerapandi' }, { name: 'Rasipuram' },
    { name: 'Senthamangalam' }, { name: 'Attur' }, { name: 'Yercaud' }, { name: 'Namakkal' }, { name: 'Rasipuram' },
    { name: 'Erode (East)' }, { name: 'Erode (West)' },

  ]

  public constituency: any = 'No-Select';



  public userlogin(username: any, password: any) {

    return this.httpClient.post<any>(this.baseUrl + '/login.php', { username, password })
      .pipe(map(Users => {
        this.constituency = Users[0].district;
        //console.log(this.constituency);


        this.setToken(Users[0].name);
        this.getLoggedInName.emit(true);
        return Users;
        //console.log(Users);
      }));
  }

  public userregistration(email: any, firstname: any, lastname: any, father_name: any, district: any, contact_no: any, date_of_birth: any, educational_qualification: any, profession: any, location_id: any) {
    return this.httpClient.post<any>(this.baseUrl + '/register.php', { email, firstname, lastname, father_name, district, contact_no, date_of_birth, educational_qualification, profession, location_id })
      .pipe(map(Users => {
        return Users;
      }));
  }

  public create_state_admin(mode: any, email: any, firstname: any, lastname: any, designation: any, party_designation: any, approval_status: any, location_id: any) {
    const httpOptions: Object = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };
    return this.httpClient.post<any>(this.baseUrl + '/create.php?category=SA', { mode, email, firstname, lastname, designation, party_designation, approval_status, location_id }, httpOptions)
      .pipe(map(Users => {
        return Users;
      }))
  }

  public create_dist_admin(mode: any, email: any, firstname: any, lastname: any, district: any, designation: any, party_designation: any, approval_status: any, location_id: any) {
    const httpOptions: Object = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };
    return this.httpClient.post<any>(this.baseUrl + '/create.php?category=DA', { mode, email, firstname, lastname, district, designation, party_designation, approval_status, location_id }, httpOptions)
      .pipe(map(Users => {
        return Users;
      }));
  }

  public create_office_bearers(mode: any, email: any, firstname: any, lastname: any, age: any, father_name: any, educational_qualification: any, date_of_birth: any, additional_qualification: any, contact_no: any, whatsapp_no: any, profession: any, address1: any, applied_role: any, party_comments: any, location_id: any) {
    return this.httpClient.post<any>(this.baseUrl + '/create.php?category=OB', { mode, email, firstname, lastname, age, father_name, educational_qualification, date_of_birth, additional_qualification, contact_no, whatsapp_no, profession, address1, applied_role, party_comments, location_id })
      .pipe(map(Users => {
        return Users;
      }));
  }

  // public delete_admin(user_id:any) {
  //     return this.httpClient.post<any>(this.baseUrl + '/delete.php', { user_id})
  //     .pipe(map(Users => {
  //     return Users;
  //     }));
  //     }
  public delete_admin(user_id: any) {
    const httpOptions: Object = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };
    return this.httpClient.post<any>(this.baseUrl + '/delete.php', { user_id }, httpOptions)
      .pipe(map(Users => {
        return Users;
      }));
  }

  tabledata: any[] = []
  public viewtableSA() {
    this.httpClient.get<any>(this.baseUrl + '/show.php?mode=0')
      .pipe(map((res) => {
        const users = [];
        for (const key in res) {
          if (res.hasOwnProperty(key)) {
            users.push({ ...res[key], id: key })
          }
        } return users;
      })).subscribe((users: any[]) => {
        //console.log(users);
        this.tabledata = users[0];
        //console.log(this.tabledata);
      })
  }

  tabledataDA: any[] = [];
  public viewtableDA() {
    this.httpClient.get<any>(this.baseUrl + '/show.php?mode=1')
      .pipe(map((res) => {

        const users = [];
        for (const key in res) {
          if (res.hasOwnProperty(key)) {
            users.push({ ...res[key], id: key })
          }
        } return users;
      })).subscribe((users: any[]) => {
        console.log(users);

        this.tabledataDA = users[0];
        //console.log(this.tabledataDA);
      })
  }


  tabledataOB: any[] = [];
  public viewtableOB() {
    this.httpClient.get<any>(this.baseUrl + '/show.php?mode=2')
      .pipe(map((res) => {
        const users = [];
        for (const key in res) {
          if (res.hasOwnProperty(key)) {
            users.push({ ...res[key], id: key })
          }
        } return users;
      })).subscribe((users: any[]) => {
        console.log(users)
        this.tabledataOB = users[0];
      })
  }

  tabledataOBapprove: any[] = [];
  public viewtableOBapprove() {

    this.httpClient.get<any>(this.baseUrl + '/rolechange_approvel_show.php')
      .pipe(map((res) => {
        const users = [];
        for (const key in res) {
          if (res.hasOwnProperty(key)) {
            users.push({ ...res[key], id: key })
          }
        } return users;
      })).subscribe((users: any[]) => {
        console.log(users);
        this.tabledataOBapprove = users[0];
      })
  }


  public sendmail(email: any) {
    return this.httpClient.post<any>(this.baseUrl + '/send_email.php', { email })
      .pipe(map(Users => {
        return Users;
      }));
  }
  public resetpassword(email: any, password: any, cpassword: any) {
    return this.httpClient.post<any>(this.baseUrl + '/update_password.php', { email, password, cpassword })
      .pipe(map(Users => {
        return Users;
      }));
  }
  public updateSA(mode: any, user_id: any, firstname: any, lastname: any, designation: any, party_designation: any, email: any, approval_status: any, location_id = '1') {
    //let firstname='names'
    const httpOptions: Object = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };
    //     console.log(user_id);
    // console.log("apidata : "+user_id,firstname,lastname,designation,party_designation,approval_status)
    return this.httpClient.post<any>(this.baseUrl + '/update.php?mode=0', { mode, user_id, firstname, lastname, designation, party_designation, email, approval_status, location_id }, httpOptions)
      .pipe(map(Users => {
        return Users;
      }));
  }
  public updateDA(mode: any, user_id: any, firstname: any, lastname: any, designation: any, party_designation: any, district: any, email: any, approval_status: any, location_id = '1') {
    //let firstname='names'
    const httpOptions: Object = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };
    console.log(user_id);
    console.log("apidata : " + user_id, firstname, lastname, designation, party_designation, district, approval_status)
    return this.httpClient.post<any>(this.baseUrl + '/update.php?mode=1', { mode, user_id, firstname, lastname, designation, party_designation, district, email, approval_status,location_id }, httpOptions)
      .pipe(map(Users => {
        return Users;
      }));
  }
  public updateOB(mode: any, user_id: any, firstname: any, lastname: any, email: any, age: any, father_name: any, educational_qualification: any,
    additional_qualification: any, date_of_birth: any, contact_no: any, whatsapp_no: any, profession: any, address1: any, party_comments: any,applied_role:any,location_id = '1') {
  
    const httpOptions: Object = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };
    console.log(user_id);
     console.log("apidata : " + user_id, firstname, lastname)
    return this.httpClient.post<any>(this.baseUrl + '/update.php?mode=2', { mode, user_id, firstname, lastname,email,age,father_name,educational_qualification,
      additional_qualification,date_of_birth, contact_no,whatsapp_no, profession,address1,party_comments,applied_role,location_id }, httpOptions)
      .pipe(map(Users => {
        return Users;
      }));
  }
<<<<<<< HEAD
  public create_meeting(meeting_name:any,meeting_time:any,meeting_date:any,participants:any,meeting_type:any,meeting_location:any, comments:any) {
    console.log("ho");
    return this.httpClient.post<any>(this.baseUrl + '/createmeeting.php', 
    { meeting_name,meeting_time,meeting_date,participants,meeting_type,meeting_location,comments},)
=======
  public create_meeting(meeting_name:any,meeting_time:any,meeting_date:any,participants:any,meeting_type:any,meeting_location:any, comments:any,constituency:any) {
     console.log(constituency);
    return this.httpClient.post<any>(this.baseUrl + '/createmeeting.php', 
    { meeting_name,meeting_time,meeting_date,participants,meeting_type,meeting_location,comments,constituency},)
>>>>>>> 9b6aee123ef74c64dbde6281e5e2c714c828f102
    .pipe(map(Users => {
    return Users;
    }));
    }
    public approve_role(user_id:any,new_role:any,status:any) {
      console.log(new_role);
     // new_role="head";
     // user_id = ar_id;                                                                                                                                                                                                                                
      const httpOptions : Object = {
        headers: new HttpHeaders({
          'Content-Type':'application/x-www-form-urlencoded'
        })
      };
        return this.httpClient.post<any>(this.baseUrl + '/rolechange_app_rej.php', { user_id,new_role,status},httpOptions)
        .pipe(map(Users => {
        return Users;
        }));
        }
<<<<<<< HEAD
   


    public rq_form(name:any,user_id:any,email:any,applied_role:any,new_designation:any, reason:any) {
      const httpOptions: Object = {
        headers: new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded'
        })
      };
   // console.log("sdf")
      //console.log(name);
     return this.httpClient.post<any>(this.baseUrl + '/rolechange_req.php', 
      {name,applied_role,new_designation,reason ,user_id,email},httpOptions)
      .pipe(map(Users => {
      return Users;
      }));

    }
    requestTable:any[] = [];
    public request_admin(rq){
      this.httpClient.get<any>(this.baseUrl + '/show.php?mode=2')
      .pipe(map((res) => {
        const  request_form = [];
        for (const key in res) {
          if (res.hasOwnProperty(key)) {
            request_form.push({ ...res[key], id: key })
          }
        } return  request_form;
      })).subscribe(( request_form: any[]) => {
        console.log( request_form)
        this.requestTable = request_form;
        console.log(request_form);
        this.requestTable=rq;
        console.log(this.requestTable);
    
      })
      
      
      
      

    }
=======
>>>>>>> 9b6aee123ef74c64dbde6281e5e2c714c828f102
  //    public updateSA(mode:any,firstname:any,lastname:any,designation:any,party_designation:any,email:any,approval_status:any,location_id='1') {
  //  const httpOptions : Object = {
  //       headers: new HttpHeaders({
  //         'Content-Type':'application/x-www-form-urlencoded'
  //       })
  //     };
  //       console.log("apidata"+firstname,lastname,designation,party_designation,approval_status,mode)
  //           return this.httpClient.post<any>(this.baseUrl + '/update.php?mode=0', {mode,firstname,lastname,designation,party_designation,email,approval_status,location_id})
  //                   .pipe(map(Users => {
  //                   return Users;
  //                   }));
  //             }
  // public delete_admin(user_id:any) {
  //   const httpOptions : Object = {
  //     headers: new HttpHeaders({
  //       'Content-Type':'application/x-www-form-urlencoded'
  //     })
  //   };
  //     return this.httpClient.post<any>(this.baseUrl + '/delete.php', { user_id},httpOptions)
  //     .pipe(map(Users => {
  //     return Users;
  //     }));
  //     }


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
