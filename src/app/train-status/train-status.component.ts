import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AppService} from '../app.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-train-status',
  templateUrl: './train-status.component.html',
  styleUrls: ['./train-status.component.css']
})
export class TrainStatusComponent implements OnInit {

public station:any;
public trainStatusDetails : any;
public routeObj : any;
public nextStoppage :any;
public showNextStoppageStation:boolean = false;
public routeArr : any = [];

  constructor(private _router : Router , private _appService : AppService , private spinner: NgxSpinnerService) {

  this.station =  this._appService.station;
  // this.trainStatusDetails=this._appService.trainStatusDetails;

this._appService.getStatusDetails().
subscribe(
  data => {console.log(data);
    this.trainStatusDetails = data;
      this.showRouteInformation(this.trainStatusDetails.route);
    console.log("train  status" ,  this.trainStatusDetails.route);
  },
  err=>console.log(err));
  // console.log("route is " , this.trainStatusDetails.route);
  console.log("station is at" , this.station);
        // console.log("station is at route" , this.trainStatusDetails.route);
        // this.routeArr=this.trainStatusDetails.route;
        // console.log(this.routeArr);



  }

  ngOnInit() {
    this.spinner.show();

    setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.spinner.hide();
    }, 5000);
}

  showRouteInformation(trainStatus){
    for(let value of trainStatus){
      console.log(value);
      if(value.station.name == this.station)
      {
         console.log(value.station.name);
         this.routeObj = value;
         console.log("route object" , this.routeObj)
         console.log(this.nextStoppage);
        console.log("this is route object" , this.routeObj);
        if(value.schdep == 'Destination' || value.scharr == 'Source') {
          this.showNextStoppageStation = false;
          console.log("departure" , value.schdep);
          console.log("arrival" , value.scharr)
        }
        else {
          var num : number = this.trainStatusDetails.route.indexOf(value);
          this.nextStoppage = this.trainStatusDetails.route[num+1];
          this.showNextStoppageStation = true;
        }
      }
    }
  }

}
