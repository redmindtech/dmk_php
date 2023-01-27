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


  mydist = [
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

  constructor(private fb: FormBuilder,private dataService: ApiService,private router:Router ) {

    this.stateadminform = this.fb.group({ //angForm
        email:['',Validators.required],
        firstname:['',Validators.required],
        lastname:['',Validators.required],
        district:['',Validators.required],
        designation:['',Validators.required],
        party_designation:['',Validators.required],
        approval_status:['',Validators.required],
        location_id:['1',Validators.required]
        });
}

  ngOnInit(): void {
  }


  postdata(angForm1 : any) //angForm1
  {
      console.log(angForm1);
  this.dataService.create_state_admin(angForm1.value.email,angForm1.value.firstname,angForm1.value.lastname,angForm1.value.district,angForm1.value.designation,angForm1.value.party_designation,angForm1.value.approval_status,angForm1.value.location_id)
  .pipe(first())
  .subscribe(
  data => {
      alert("State admin detail was successfully created !");
  //this.router.navigate(['']);
  angForm1.reset();
  },

  error => {
      console.log(error);
  });
  }
  get email() { return this.stateadminform.get('email'); }
  get firstname() { return this.stateadminform.get('firstname'); }
  get lastname() { return this.stateadminform.get('lastname'); }
  get district() { return this.stateadminform.get('district'); }
  get designation() { return this.stateadminform.get('designation'); }
  get party_designation() { return this.stateadminform.get('party_designation'); }
  get approval_status() { return this.stateadminform.get('approval_status'); }
  get location_id() { return this.stateadminform.get('location_id'); }



}
