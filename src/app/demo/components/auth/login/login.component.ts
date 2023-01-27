/*import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { __values } from 'tslib';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EncrDecrServiceService } from 'src/app/service/encr-decr-service.service';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [`
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `]
})
export class LoginComponent implements OnInit{
    userForm!: FormGroup;
    usertype:string='';
    
    

    valCheck: string[] = ['remember'];

    //password!: string;
    signinas!:string;
    user:any=[{name:'admin',value:''}];
    // user(a:any){
    //     console.log("hh");
    //     console.log(this.valSelect1);
    // }
    paymentOptions: any[] = [
        { name: 'Admin', value: 1 },
        { name: 'Super Admin', value: 2 }]
    
    
    
    con(){
        console.log(this.userForm.value);
    }
    conlog(a:any){
        this.usertype =a;
        console.log(a);
    }
    validuser:boolean=false;
    helptext(){
        if(this.usertype !='admin' && this.usertype != 'superadmin'){
            this.validuser=true;
        }
        console.log(this.validuser);
    }

    constructor(public layoutService: LayoutService,
        private EncrDecr:EncrDecrServiceService) { }
    ngOnInit(){
        this.userForm = new FormGroup({
            'email': new FormControl(null, [Validators.required, Validators.email]),
           'password': new FormControl(null,Validators.required),
           'rememberme1': new FormControl(true)
          });
    }

    encrypt(){
        var encrypted = this.EncrDecr.set('123456$#@$^@1ERF',this.userForm.value.password);
        var decrypted = this.EncrDecr.get('123456$#@$^@1ERF',encrypted);
         
          console.log('Encrypted password:' + encrypted);
          console.log('decrypted password:' + decrypted);
    }
    

    
    getUserValue(val: any){
        console.log(val);
    }
}
*/
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from '../../../../api.service';

@Component({
selector: 'app-login',
templateUrl: './login.component.html',
//styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    userForm: FormGroup;
constructor(private fb: FormBuilder,private dataService: ApiService,private router:Router) {
this.userForm = this.fb.group({
email: ['', [Validators.required,Validators.minLength(1), Validators.email]],
password: ['', Validators.required]
});
}

ngOnInit() {
}
postdata(userForm : any)
{
this.dataService.userlogin(userForm.value.email,userForm.value.password)
.pipe(first())
.subscribe(
data => {
const redirect = this.dataService.redirectUrl ? this.dataService.redirectUrl : '/uikit/formlayout';
this.router.navigate([redirect]);
},
error => {
alert("User name or password is incorrect")
});
}
get email() { return this.userForm.get('email'); }
get password() { return this.userForm.get('password'); }
}

