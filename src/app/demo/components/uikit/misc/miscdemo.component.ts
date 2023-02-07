import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { ApiService } from '../../../../api.service';



@Component({
    
    templateUrl: './miscdemo.component.html',
    //styleUrls: ['./miscdemo.component.scss']
})
export class MiscDemoComponent implements OnInit {

  // districts:any=this.dataService.districts;
  reqform :FormGroup;
   constituencies!:any;
  ApiService: any;
  customers2: any[];
  rq:any=[];
  rq_form=[];
  users:'';
  customer: any[];
  toggle5(a: any) {
    this.customer = [];
    for (const prop in this.ApiService.requestTable) {
        this.customer.push(this.ApiService.requestTable[prop])
    }
    this.customer.pop();
  }

  
 // request_form!:any;
  
  
  //meeting_location: any;
 // meeting_type: any;
  //participants!:any;
 
  //comments: any;
  constructor(private fb: FormBuilder,private dataService: ApiService,private router:Router ) { 
    
    //this.reqform= this.fb.group({});


  }
  ngOnInit(): void {  
     console.log(this.dataService.requestTable);
    this.customer = [];
    for (const prop in this.dataService.requestTable) {
        this.customer.push(this.dataService.requestTable[prop])
       // 'name': new FormControl(this.customer.name);
       this.dataService.requestTable=this.customer;
       this.reqform=new FormGroup({
      'name' : new FormControl(this.customer[0].name),
      'user_id' : new FormControl(this.customer[0].id),
      'email' : new FormControl(this.customer[0].email),
      'applied_role' : new FormControl(this.customer[0].applied_role),
      'new_designation' : new FormControl(null,Validators.required),
      'reason' : new FormControl(null,Validators.required),


    });

   
   
  }

  }
  
  /*toggle(a: any) {
    this.customers2 = [];
    for (const prop in this.ApiService.tabledataOB) {
        this.customers2.push(this.ApiService.getrequest[prop])
        console.log(this.customers2)
    }
   //. this.customers2.pop();
  }*/
public request_form(rq){
  console.log(rq);
  this.ApiService.request_form(rq);
      for (const prop in this.ApiService.request_form) {
        this.rq.push(this.ApiService.request_form[prop])
    }


}
getrequest(){
  this.ApiService.request_admin();
}


  postdata(angForm1) //angForm1
    {
        console.log(angForm1);
        if( angForm1.status="valid" )
        {
            this.dataService.rq_form(angForm1.value.name,angForm1.value.user_id,angForm1.value.email,angForm1.value.new_designation,angForm1.value.applied_role,angForm1.value.reason )
            .pipe(first())
            .subscribe(
            data => {
              console.log(angForm1.value.name,angForm1.value.user_id,angForm1.value.email,angForm1.value.new_designation,angForm1.value.applied_role,angForm1.value.reason );
                alert("Request has been created successfully!")
            angForm1.reset();
            this.router.navigate(['uikit/formlayout']);
            },

            error => {
                console.log(error);
            });
        }
        else{
            alert("Please enter the valid details");
        }
    }



 
    get email() { return this.reqform.get('email'); }
  get user_id() { return this.reqform.get('user_id'); }
  get name() { return this.reqform.get('name'); }
  get  new_designation() { return this.reqform.get('new_designation'); }
  get applied_role() { return this.reqform.get(' applied_role'); }
  get reason() { return this.reqform.get('reason'); }
}