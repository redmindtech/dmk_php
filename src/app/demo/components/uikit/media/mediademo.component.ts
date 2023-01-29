import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/demo/service/product.service';
import { PhotoService } from 'src/app/demo/service/photo.service';
import { Product } from 'src/app/demo/api/product';


import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from '../../../../api.service';



@Component({
    templateUrl: './mediademo.component.html'
})
export class MediaDemoComponent implements OnInit {

    angForm :FormGroup;

    selfregistration: any;
    mydist:any;

    constructor(private fb: FormBuilder,private dataService: ApiService,private router:Router ) {

        this.mydist = this.dataService.mydist;

        this.angForm = this.fb.group({ //angForm
            email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
            firstname:['',[Validators.required, Validators.pattern('[A-Za-z]{1,32}')]],
            lastname:['',[Validators.required,Validators.pattern('[A-Za-z]{1,32}')]],
            father_name:['',[Validators.required,Validators.pattern('[A-Za-z]{1,32}')]],
            //parent_number:['',Validators.required],
            district:['',Validators.required],
            contact_no:['',[Validators.required,Validators.pattern('[789][0-9]{9}')]],
            date_of_birth:[''],
            educational_qualification:[''],
            profession:[''],
            location_id:['1',Validators.required]
            });
    }

    ngOnInit() {

    }

    postdata(angForm1 : any) //angForm1
    {
        console.log(angForm1);
        if(this.angForm.valid==true)
        {
            this.dataService.userregistration(angForm1.value.email,angForm1.value.firstname,angForm1.value.lastname,angForm1.value.father_name,angForm1.value.district,angForm1.value.contact_no,angForm1.value.date_of_birth,angForm1.value.educational_qualification,angForm1.value.profession,angForm1.value.location_id)
            .pipe(first())
            .subscribe(
            data => {
                alert("Successfully self registration completed!")
            this.router.navigate(['']);
            },
        
            error => {
                console.log(error);
            });
        }
        else{
            alert("Please enter the valid data")
        }
    }

    get email() { return this.angForm.get('email'); } //angForm
    get firstname() { return this.angForm.get('firstname'); }
    get lastname() { return this.angForm.get('lastname'); }
    get father_name() { return this.angForm.get('father_name'); }
    //get parent_number() { return this.angForm.get('parent_number'); }
    get district() { return this.angForm.get('district'); }
    get contact_no() { return this.angForm.get('contact_no'); }
    get date_of_birth() { return this.angForm.get('date_of_birth'); }
    get educational_qualification() { return this.angForm.get('educational_qualification'); }
    get profession() { return this.angForm.get('profession'); }
    get location_id() { return this.angForm.get('location_id'); }
}
