import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AppService} from '../app.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-betweenstations',
  templateUrl: './betweenstations.component.html',
  styleUrls: ['./betweenstations.component.css']
})
export class BetweenstationsComponent implements OnInit {


public trainBetweenStationObject : any;
public sourceStation:any;
public destinationStation : any;
public runningDays :any;
showFull : boolean =false;
count : number;
showMessage:boolean=false;

  constructor(private route: ActivatedRoute , private _appService : AppService , private _router : Router) {
    this.route.params.subscribe(params => {
         this.sourceStation = params['id1'],
        this.destinationStation = params['id2'];
        this._appService.getTrainBetweenStations(this.sourceStation , this.destinationStation)
        .subscribe(
        data=> {
                this.trainBetweenStationObject=data;
                console.log(this.trainBetweenStationObject);
                this.runningDays = this.trainBetweenStationObject.trains.days;
               console.log("running days are " , this.runningDays);
               if(this.trainBetweenStationObject.response_code != 200)  {
                 this.showMessage=true;
               }
               else {
                 this.showMessage=false;
               }
                },
               err=>console.log(err));
             });
}

      // this._appService.getStationsName().
      // subscribe(
      //   data=> {
      //           this.trainBetweenStationObject=data;
      //           console.log(this.trainBetweenStationObject);
      //           },
      //          err=>console.log(err)
      // );




  ngOnInit() {
  }

  // getDays(){
  // for(let day of days) {
  //   console.log("daayis " , day);
  // if(day.runs == 'Y') {
  //   this.count=this.count+1;
  //   console.log(this.count);
  // }
  // }
  // if(this.count == 7)
  // {
  //   this.showFull=false
  //   console.log("inside if");
  // }
  // else {
  //   this.showFull = true;
  //   console.log("inside else");
  // }
  // }
  goBack(){
    this._router.navigate(['/']);
  }
}
