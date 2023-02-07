import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { ApiService } from '../../../api.service';

@Component({
  selector: 'app-create-meeting',
  templateUrl: './create-meeting.component.html',
  styleUrls: ['./create-meeting.component.scss']
})
export class CreateMeetingComponent implements OnInit {
  
  
 // districts:any=this.dataService.districts;
  createmeetingform !:FormGroup;
  constituencies!:any;
  //meeting_location: any;
 // meeting_type: any;
  //participants!:any;
 
  //comments: any;
  constructor(private fb: FormBuilder,private dataService: ApiService,private router:Router ) { 
    
    this.createmeetingform= this.fb.group({
      meeting_name: [''],
      meeting_date:[''],
      meeting_time:[''],
      participants:[''],
      meeting_type:[''],
      comments:[''],
      meeting_location:[''],
   district:['']
       
    });
  }
  ngOnInit(): void {
  }

  postdata(angForm1 : any) //angForm1
    {
       
        if( angForm1.status="valid" )
        {
          console.log(angForm1.value.comments);
          console.log(angForm1.value.district);

            this.dataService.create_meeting(angForm1.value.meeting_name,angForm1.value.meeting_date,
              angForm1.value.meeting_time,angForm1.value.participants,
              angForm1.value.meeting_type,angForm1.value.comments, 
              angForm1.value.meeting_location)
            .pipe(first())
            .subscribe(
            data => {
                alert("Meeting has been created successfully!")
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



 
  radiobutton(option:any){
    //this.meeting_type=option;
   console.log(this.meeting_type);
  }
  Participants(a:any){
    this.Participants=a;
  }
  
  get meeting_name() { return this.createmeetingform.get('meeting_name'); }
  get  meeting_date() { return this.createmeetingform.get('meeting_date'); }
  get meeting_time() { return this.createmeetingform.get(' meeting_time'); }
  get participants() { return this.createmeetingform.get('participants'); }
  get meeting_type() { return this.createmeetingform.get('meeting_type'); }
  get comments() { return this.createmeetingform.get('comments'); }
  get meeting_location() { return this.createmeetingform.get('meeting_location'); }

}



