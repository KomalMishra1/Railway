import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AppService} from '../app.service';
import { NgxSpinnerService } from 'ngx-spinner';
import {Router} from '@angular/router';

@Component({
  selector: 'app-trainschedule',
  templateUrl: './trainschedule.component.html',
  styleUrls: ['./trainschedule.component.css']
})
export class TrainscheduleComponent implements OnInit {
trainScheduledDetails : any;
runningDays : any=[];
count : number=0;
showFull : boolean = false;
showMessage:boolean=false;

  constructor(private route: ActivatedRoute ,  private _appService : AppService , private spinner: NgxSpinnerService , private _router : Router) {
    this.spinner.show();

  setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
  }, 5000);
    this.route.params.subscribe(params => {
        var trainNo : number = parseInt(params['id']);
        console.log(typeof trainNo);
        this._appService.getTrainStations(trainNo)
  .subscribe(
  data=> {
    this.trainScheduledDetails=data;
    console.log(this.trainScheduledDetails.train.name);
     this.runningDays = this.trainScheduledDetails.train.days;
    console.log(this.runningDays);
      this.getDays(this.runningDays);
      if(this.trainScheduledDetails.response_code != 200)  {
        this.showMessage=true;
      }
      else {
        this.showMessage=false;
      }
      // console.log(data);
    },
   err=>console.log(err));

        });
  }



  ngOnInit() {

  }

getDays(days){

for(let day of days) {
  console.log("daayis " , day);
if(day.runs == 'Y') {
  this.count=this.count+1;
  console.log(this.count);
}
}
if(this.count == 7)
{
  this.showFull=false
  console.log("inside if");
}
else {
  this.showFull = true;
  console.log("inside else");
}
}


goBack(){
  this._router.navigate(['/']);
}

}
