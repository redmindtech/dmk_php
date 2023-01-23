import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { FormBuilder, Validators,NgForm} from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from '../../../../api.service';
import { FormGroup, FormControl } from '@angular/forms';



@Component({
selector: 'app-filedemo',
templateUrl: './filedemo.component.html',
//styleUrls: ['./login.component.css']
})
export class FileDemoComponent implements OnInit {
    profileForm = new FormGroup({
        email: new FormControl(''),
        oldpassword: new FormControl(''),
        newpassword: new FormControl(''),
      });
    userForm: FormGroup;
constructor(private fb: FormBuilder,private dataService: ApiService,private router:Router) {
this.userForm = this.fb.group({
email: ['', [Validators.required,Validators.minLength(1), Validators.email]],
password: ['', Validators.required]
});
}

ngOnInit() {
}
postdata(forgotForm : any)
{
this.dataService.userlogin(forgotForm.value.email,forgotForm.value.password)
.pipe(first())
.subscribe(
data => {
const redirect = this.dataService.redirectUrl ? this.dataService.redirectUrl : '';
this.router.navigate([redirect]);
},
error => {
alert("User name or password is incorrect")
});
}
get email() { return this.userForm.get('email'); }
get password() { return this.userForm.get('password'); }
}