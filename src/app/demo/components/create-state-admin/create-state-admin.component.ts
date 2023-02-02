import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from '../../../api.service';



@Component({
  selector: 'app-create-state-admin',
  templateUrl: './create-state-admin.component.html',
  styleUrls: ['./create-state-admin.component.scss']
})
export class CreateStateAdminComponent implements OnInit {

  stateadminform !:FormGroup;
  check_fn:boolean=true;

  constructor(private fb: FormBuilder,private dataService: ApiService,private router:Router ) {

    this.stateadminform = this.fb.group({ //angForm
        email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
        firstname:['',[Validators.required, Validators.pattern('[A-Za-z]{1,32}')]],
        lastname:['',[Validators.required,Validators.pattern('[A-Za-z]{1,32}')]],
        //district:['',Validators.required],
        designation:[''],
        party_designation:[''],
        approval_status:[''],
        location_id:['1'],
        mode:['0']
        });
}

  ngOnInit(): void {
    this.dataService.viewtableSA();
    //console.log(this.dataService.tabledata);
    
}

  postdata(angForm1 : any) //angForm1
  {
      console.log(angForm1);
    if(this.stateadminform.valid==true && this.email!=null && this.firstname!=null && this.lastname!=null)
    {
        this.dataService.create_state_admin(angForm1.value.mode,angForm1.value.email,angForm1.value.firstname,angForm1.value.lastname,angForm1.value.designation,angForm1.value.party_designation,angForm1.value.approval_status,angForm1.value.location_id)
        .pipe(first())
        .subscribe(
        data => {
            alert("State admin user has been created successfully!");
        //this.router.navigate(['']);
        angForm1.reset();
        },

        error => {
            console.log(error);
        });
    }
    else{
        alert("Please enter the valid details");
    }
  }

  get email() { return this.stateadminform.get('email'); }
  get firstname() { return this.stateadminform.get('firstname'); }
  get lastname() { return this.stateadminform.get('lastname'); }
  //get district() { return this.stateadminform.get('district'); }
  get designation() { return this.stateadminform.get('designation'); }
  get party_designation() { return this.stateadminform.get('party_designation'); }
  get approval_status() { return this.stateadminform.get('approval_status'); }
  get location_id() { return this.stateadminform.get('location_id'); }
  get mode() { return this.stateadminform.get('mode'); }



}
