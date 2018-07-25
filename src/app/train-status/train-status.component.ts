import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AppService} from '../app.service';

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
  constructor(private _router : Router , private _appService : AppService) {

  this.station =  this._appService.station;
  this.trainStatusDetails=this._appService.trainStatusDetails;

  console.log(this.trainStatusDetails.route);
  console.log(this.station);
      for(let value of this.trainStatusDetails.route){
        if(value.station.name == this.station)
        {
          // console.log(value.station.name);
           this.routeObj = value;
           console.log(this.nextStoppage);
          console.log(this.routeObj);
            var num : number = this.trainStatusDetails.route.indexOf(value);
            this.nextStoppage = this.trainStatusDetails.route[num+1];
        }
      }
  }

  ngOnInit() {
  }




}
