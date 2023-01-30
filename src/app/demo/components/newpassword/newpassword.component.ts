import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import { ApiService } from '../../../api.service';
import { FormBuilder, Validators,NgForm} from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
@Component({
  selector: 'app-newpassword',
  templateUrl: './newpassword.component.html',
  styleUrls: ['./newpassword.component.scss']
})
export class NewpasswordComponent implements OnInit {
    resetpassword:FormGroup;
    sent_email:string;
  constructor(private route:ActivatedRoute,private fb: FormBuilder,private dataService: ApiService,private router:Router) { 
    this.sent_email=this.route.snapshot.params['email'];
    this.resetpassword = this.fb.group({
        email: [this.sent_email, [Validators.required,Validators.minLength(1), Validators.email]],
        password:['',[Validators.required]],
        cpassword:['',[Validators.required]],
        });

  }
    ngOnInit(): void {
        //console.log(this.route.snapshot.params['email']);
    }

postdata(forgotForm : any)
{
console.log(this.resetpassword)
this.dataService.resetpassword(forgotForm.value.email,forgotForm.value.password,forgotForm.value.cpassword)
.pipe(first())
.subscribe(
data => {
alert("Password was updated");
this.resetpassword.reset();
this.router.navigate(['']);
},
error => {
    console.log(error)
});
}
get email() { return this.resetpassword.get('email'); }
get password() { return this.resetpassword.get('password'); }
get cpassword() { return this.resetpassword.get('cpassword'); }
}
