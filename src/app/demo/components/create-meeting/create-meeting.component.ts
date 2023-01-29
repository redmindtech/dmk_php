import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../api.service';

@Component({
  selector: 'app-create-meeting',
  templateUrl: './create-meeting.component.html',
  styleUrls: ['./create-meeting.component.scss']
})
export class CreateMeetingComponent implements OnInit {
  
  MeetingOptions:any;
  participantsptions:any;
  districts:any=this.dataService.districts;

  constructor( private dataService: ApiService) { }

  ngOnInit(): void {
     }

  radiobutton(option:any){
    this.MeetingOptions=option;
    console.log(this.MeetingOptions);
  }
  Participants(a:any){
    this.participantsptions=a;
  }

}
