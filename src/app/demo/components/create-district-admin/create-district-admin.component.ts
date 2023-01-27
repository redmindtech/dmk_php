import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from '../../../api.service';


@Component({
  selector: 'app-create-district-admin',
  templateUrl: './create-district-admin.component.html',
  styleUrls: ['./create-district-admin.component.scss']
})
export class CreateDistrictAdminComponent implements OnInit {

    distadminform !:FormGroup;
    mydist!:any;

    constructor(private fb: FormBuilder,private dataService: ApiService,private router:Router ) {

        this.mydist = this.dataService.mydist;

      this.distadminform = this.fb.group({ //angForm
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
    this.dataService.create_dist_admin(angForm1.value.email,angForm1.value.firstname,angForm1.value.lastname,angForm1.value.district,angForm1.value.designation,angForm1.value.party_designation,angForm1.value.approval_status,angForm1.value.location_id)
    .pipe(first())
    .subscribe(
    data => {
        alert("District admin detail was successfully created !")
    //this.router.navigate(['']);
    angForm1.reset();
    },

    error => {
        console.log(error);
    });
    }

    get email() { return this.distadminform.get('email'); }
    get firstname() { return this.distadminform.get('firstname'); }
    get lastname() { return this.distadminform.get('lastname'); }
    get district() { return this.distadminform.get('district'); }
    get designation() { return this.distadminform.get('designation'); }
    get party_designation() { return this.distadminform.get('party_designation'); }
    get approval_status() { return this.distadminform.get('approval_status'); }
    get location_id() { return this.distadminform.get('location_id'); }

}
