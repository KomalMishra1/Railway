import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AppService} from '../app.service';
import { NgxSpinnerService } from 'ngx-spinner';

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


  constructor(private route: ActivatedRoute ,  private _appService : AppService , private spinner: NgxSpinnerService) {
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

}
