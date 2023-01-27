import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from '../../../api.service';

@Component({
  selector: 'app-create-office-bearers',
  templateUrl: './create-office-bearers.component.html',
  styleUrls: ['./create-office-bearers.component.scss']
})
export class CreateOfficeBearersComponent implements OnInit {

  officebearerform !:FormGroup;

  constructor(private fb: FormBuilder,private dataService: ApiService,private router:Router) {

    this.officebearerform = this.fb.group({ //angForm
        email:['',Validators.required],
        firstname:['',Validators.required],
        lastname:['',Validators.required],
        age:['',Validators.required],
        father_name:['',Validators.required],
        educational_qualification:['',Validators.required],
        date_of_birth:['',Validators.required],
        additional_qualification:['',Validators.required],
        contact_no:['',Validators.required],
        whatsapp_no:['',Validators.required],
        profession:['',Validators.required],
        address1:['',Validators.required],
        applied_role:['',Validators.required],
        party_comments:['',Validators.required],
        location_id:['1',Validators.required]
      });

   }

  ngOnInit(): void {
  }

  postdata(officebearerform : any) //officebearerform
  {
      //console.log(officebearerform);
  this.dataService.create_office_bearers(officebearerform.value.email,officebearerform.value.firstname,officebearerform.value.lastname,officebearerform.value.age,officebearerform.value.father_name,officebearerform.value.educational_qualification,officebearerform.value.date_of_birth,officebearerform.value.additional_qualification,officebearerform.value.contact_no,officebearerform.value.whatsapp_no,officebearerform.value.profession,officebearerform.value.address1,officebearerform.value.applied_role,officebearerform.value.party_comments,officebearerform.value.location_id)
  .pipe(first())
  .subscribe(
  data => {
      alert("Office bearers detail was successfully created !")
  //this.router.navigate(['']);
  officebearerform.reset();
  },

  error => {
      console.log(error);
  });
  }

  get email() { return this.officebearerform.get('email'); }
  get firstname() { return this.officebearerform.get('firstname'); }
  get lastname() { return this.officebearerform.get('lastname'); }
  get age() { return this.officebearerform.get('age'); }
  get father_name() { return this.officebearerform.get('father_name'); }
  get educational_qualification() { return this.officebearerform.get('educational_qualification'); }
  get date_of_birth() { return this.officebearerform.get('date_of_birth'); }
  get additional_qualification() { return this.officebearerform.get('additional_qualification'); }
  get contact_no() { return this.officebearerform.get('contact_no'); }
  get whatsapp_no() { return this.officebearerform.get('whatsapp_no'); }
  get profession() { return this.officebearerform.get('profession'); }
  get address1() { return this.officebearerform.get('address1'); }
  get applied_role() { return this.officebearerform.get('applied_role'); }
  get party_comments() { return this.officebearerform.get('party_comments'); }
  get location_id() { return this.officebearerform.get('location_id'); }

}

