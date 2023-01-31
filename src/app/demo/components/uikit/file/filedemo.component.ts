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

    sendmail:FormGroup;

constructor(private fb: FormBuilder,private dataService: ApiService,private router:Router) {
this.sendmail = this.fb.group({
email: ['', [Validators.required,Validators.minLength(1), Validators.email]],
});
}

ngOnInit() {
}
postdata(forgotForm : any)
{
console.log(this.sendmail)
this.dataService.sendmail(forgotForm.value.email)
.pipe(first())
.subscribe(
data => {
alert("The reset link has been sent to your registeres mail");
this.router.navigate(['']);
},
error => {
    console.log(error)
    alert("The reset link has been sent to your registeres mail");
    this.sendmail.reset();
    this.router.navigate(['']);
});
}
get email() { return this.sendmail.get('email'); }
}
