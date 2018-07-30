import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AppService} from '../app.service';

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


  constructor(private route: ActivatedRoute ,  private _appService : AppService) {

    this.route.params.subscribe(params => {
        var trainNo : number = parseInt(params['id']);
        console.log(typeof trainNo);
        this._appService.getTrainStations(trainNo)
  .subscribe(
  data=> {
    this.trainScheduledDetails=data;
    console.log(this.trainScheduledDetails);
    // this.runningDays = this.trainScheduledDetails.days;
    // console.log(this.runningDays);
    // this.getDays(this.runningDays);
      console.log(data);},
   err=>console.log(err));

        });
  }



  ngOnInit() {
  }

getDays(days){

for(let day of days) {
if(day.runs == 'Y') {
  this.count=this.count+1;
}
}
if(this.count == 7)
{
  this.showFull=false
}
else {
  this.showFull = true;
}
}

}